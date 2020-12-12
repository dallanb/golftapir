import { AnyAction } from 'redux';
import {
    all,
    call,
    debounce,
    fork,
    put,
    select,
    takeLatest,
} from 'redux-saga/effects';
import ContestPageSiderContentParticipantActiveContestActiveActions, {
    ContestPageSiderContentParticipantActiveContestActiveTypes,
} from './actions';
import { ScoreService } from '@services';
import { selectContestUUID } from '@pages/Contest/selector';
import { selectSheet } from './selector';
import { initSheet } from './helpers';

function* init() {
    try {
        const uuid = yield select(selectContestUUID);
        yield call(initSheet, uuid);
        yield put(
            ContestPageSiderContentParticipantActiveContestActiveActions.initSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageSiderContentParticipantActiveContestActiveActions.initFailure(
                err
            )
        );
    }
}

function* debouncedHoleStrokeUpdate({ holeId, strokes }: AnyAction) {
    try {
        const { uuid, holes } = yield select(selectSheet);
        yield fork(ScoreService.updateHole, uuid, holeId, { strokes });
        yield put(
            ContestPageSiderContentParticipantActiveContestActiveActions.debouncedHoleStrokeUpdateSuccess(
                {
                    [holeId]: { strokes, ...holes[holeId] },
                }
            )
        );
    } catch (err) {
        yield put(
            ContestPageSiderContentParticipantActiveContestActiveActions.debouncedHoleStrokeUpdateFailure(
                err
            )
        );
    }
}

export default function* ContestPageSiderContentParticipantActiveContestActiveSaga() {
    yield all([
        takeLatest(
            ContestPageSiderContentParticipantActiveContestActiveTypes.INIT,
            init
        ),
        debounce(
            1000,
            ContestPageSiderContentParticipantActiveContestActiveTypes.DEBOUNCED_HOLE_STROKE_UPDATE,
            debouncedHoleStrokeUpdate
        ),
    ]);
}
