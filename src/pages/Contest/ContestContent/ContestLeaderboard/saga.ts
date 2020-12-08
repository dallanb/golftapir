import { AnyAction } from 'redux';
import { buffers, channel } from 'redux-saga';
import {
    actionChannel,
    all,
    flush,
    put,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import ContestPageContentContestLeaderboardActions, {
    ContestPageContentContestLeaderboardTypes,
} from './actions';
import { ContestPageTypes } from '@pages/Contest/actions';
import {
    selectContest,
    selectContestParticipants,
} from '@pages/Contest/selector';
import { initLookup, handleScoreUpdate } from './utils';
import {
    selectIsInitialized,
    selectRankingLookup,
    selectSheets,
} from './selector';

// Action Handlers

function* init() {
    try {
        const sheets = yield select(selectContestParticipants);
        yield put(ContestPageContentContestLeaderboardActions.set({ sheets }));
        const lookup = initLookup(Object.values(sheets));
        yield put(
            ContestPageContentContestLeaderboardActions.setRankingLookup(lookup)
        );
        yield put(ContestPageContentContestLeaderboardActions.initSuccess());
    } catch (err) {
        yield put(ContestPageContentContestLeaderboardActions.initFailure(err));
    }
}

export function* ContestPageContentContestLeaderboardSaga() {
    yield all([
        takeLatest(ContestPageContentContestLeaderboardTypes.INIT, init),
    ]);
}

export function* ContestLeaderboardScoreChannel() {
    const buffer: any = buffers.expanding();
    const actionChan = yield actionChannel(
        ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_SCORE,
        buffer
    );
    const resChan = channel(buffers.expanding());

    while (true) {
        const payload = yield take(actionChan);
        try {
            yield put(resChan, payload);

            if (!buffer.isEmpty()) {
                continue;
            }

            const isInitialized = yield select(selectIsInitialized);
            if (!isInitialized) {
                continue;
            }

            const results = yield flush(resChan);
            let rankingLookup = yield select(selectRankingLookup);
            let sheets = yield select(selectSheets);
            for (let result of results) {
                const { lookup, sheet } = handleScoreUpdate(
                    sheets,
                    rankingLookup,
                    result
                );
                rankingLookup = lookup;
                sheets = { ...sheets, ...sheet };
                yield put(
                    ContestPageContentContestLeaderboardActions.setRankingLookup(
                        lookup
                    )
                );
                yield put(
                    ContestPageContentContestLeaderboardActions.setSheet(sheet)
                );
            }
        } catch (err) {
            console.log(err);
        }
    }
}
