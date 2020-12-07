import { AnyAction } from 'redux';
import { buffers, channel } from 'redux-saga';
import {
    actionChannel,
    all,
    call,
    flush,
    fork,
    put,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import { ContestService, NotificationService } from '@services';
import ContestPageActions, { ContestPageTypes } from './actions';
import {
    selectContest,
    selectContestParticipants,
    selectRankingLookup,
} from './selector';
import {
    initContest,
    initSocket,
    initSubscribed,
    terminateSocket,
} from './helpers';
import { initLookup } from '@pages/Contest/utils';

// Action Handlers
function* preInit({ data: contest }: AnyAction) {
    yield put(ContestPageActions.set({ contest }));
}

function* init({ uuid }: AnyAction) {
    try {
        yield fork(initSocket, uuid);
        yield fork(initSubscribed, uuid);
        yield call(initContest, uuid);
        yield put(ContestPageActions.initSuccess());
    } catch (err) {
        yield put(ContestPageActions.initFailure(err));
    }
}

function* terminate() {
    try {
        yield call(terminateSocket);
    } catch (err) {
        console.error(err);
    }
}

function* refresh() {
    try {
        const { uuid } = yield select(selectContest);
        yield call(initContest, uuid);
        yield put(ContestPageActions.refreshSuccess());
    } catch (err) {
        yield put(ContestPageActions.refreshFailure(err));
    }
}

function* subscribe({ uuid }: AnyAction) {
    try {
        yield call(NotificationService.subscribe, uuid);
        yield put(ContestPageActions.subscribeSuccess());
    } catch (err) {
        yield put(ContestPageActions.subscribeFailure());
    }
}

function* unsubscribe({ uuid }: AnyAction) {
    try {
        yield call(NotificationService.unsubscribe, uuid);
        yield put(ContestPageActions.unsubscribeSuccess());
    } catch (err) {
        yield put(ContestPageActions.unsubscribeFailure());
    }
}

function* updateContestParticipantStatus({ uuid, status }: AnyAction) {
    try {
        yield call(ContestService.updateContestParticipant, uuid, {
            status,
        });
        yield put(
            ContestPageActions.updateContestParticipantStatusSuccess(
                uuid,
                status
            )
        );
    } catch (err) {
        yield put(
            ContestPageActions.updateContestParticipantStatusFailure(err)
        );
    }
}

export function* ContestScoreChannel() {
    const buffer: any = buffers.expanding();
    console.log(ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_SCORE); // Possibly move ranking to its own reducer and saga? It will make things easier on handling loading and all that
    const actionChan = yield actionChannel(
        ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_SCORE,
        buffer
    );
    const resChan = channel(buffers.expanding());

    while (true) {
        const payload = yield take(actionChan);
        console.log(actionChan);
        console.log(payload);
        try {
            // const res = yield call(someAPI, payload);
            console.log(payload);
            yield put(resChan, payload);

            if (!buffer.isEmpty()) {
                continue;
            }

            const results = yield flush(resChan);
            console.log(results);
            const rankingLookup = yield select(selectRankingLookup);
            if (!rankingLookup) {
                const participants = yield select(selectContestParticipants);
                const sheets = Object.values(participants);
                const lookup = initLookup(sheets);
                yield put(ContestPageActions.set({ rankingLookup: lookup }));
            }
            console.log(rankingLookup);
            // yield put({
            //     type: 'COMPLETE_TRANSACTIONS',
            //     payload: results.reduce(reducingFunction, {}),
            // });
        } catch (err) {
            console.log(err);
            // yield put({ type: 'PUT_FAILED', payload: err, error: true });
            // also there should probably be something done about
            // resChan, actionChan and failed call
            // but hard to tell what without knowing the requirements
        }
    }
}

export function* ContestPageSaga() {
    yield all([
        takeLatest(ContestPageTypes.PRE_INIT, preInit),
        takeLatest(ContestPageTypes.INIT, init),
        takeLatest(ContestPageTypes.TERMINATE, terminate),
        takeLatest(ContestPageTypes.REFRESH, refresh),
        takeLatest(ContestPageTypes.SUBSCRIBE, subscribe),
        takeLatest(ContestPageTypes.UNSUBSCRIBE, unsubscribe),
        takeLatest(
            ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_STATUS,
            updateContestParticipantStatus
        ),
    ]);
}
