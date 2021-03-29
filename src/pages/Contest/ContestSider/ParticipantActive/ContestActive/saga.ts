import { AnyAction } from 'redux';
import {
    all,
    call,
    cancel,
    debounce,
    delay,
    fork,
    put,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import ContestPageSiderParticipantActiveContestActiveActions, {
    ContestPageSiderParticipantActiveContestActiveTypes,
} from './actions';
import { selectContestUUID } from '@pages/Contest/selector';
import { initSheet, debouncedHoleStrokeUpdate } from './helpers';

function* init() {
    try {
        const uuid = yield select(selectContestUUID);
        yield call(initSheet, uuid);
        yield put(
            ContestPageSiderParticipantActiveContestActiveActions.initSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageSiderParticipantActiveContestActiveActions.initFailure(
                err
            )
        );
    }
}

export default function* ContestPageSiderParticipantActiveContestActiveSaga() {
    yield all([
        takeLatest(
            ContestPageSiderParticipantActiveContestActiveTypes.INIT,
            init
        ),
    ]);
}

export function* ContestStrokeUpdateChannel() {
    const map = new Map();

    while (true) {
        const action = yield take(
            ContestPageSiderParticipantActiveContestActiveTypes.HOLE_STROKE_UPDATE
        );
        const { holeId, strokes } = action;
        const existingTask = map.get(holeId);

        if (existingTask) {
            yield cancel(existingTask);
        }

        const newTask = yield fork(
            debouncedHoleStrokeUpdate,
            holeId,
            strokes,
            (id) => map.delete(id)
        );
        map.set(holeId, newTask);
    }
}
