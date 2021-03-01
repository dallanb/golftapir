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
import ContestPageSiderContentParticipantActiveContestActiveActions, {
    ContestPageSiderContentParticipantActiveContestActiveTypes,
} from './actions';
import { selectContestUUID } from '@pages/Contest/selector';
import { initSheet, debouncedHoleStrokeUpdate } from './helpers';

function* init() {
    try {
        const uuid: any = yield select(selectContestUUID);
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

export default function* ContestPageSiderContentParticipantActiveContestActiveSaga() {
    yield all([
        takeLatest(
            ContestPageSiderContentParticipantActiveContestActiveTypes.INIT,
            init
        ),
    ]);
}

export function* ContestStrokeUpdateChannel() {
    const map = new Map();

    while (true) {
        const action = yield take(
            ContestPageSiderContentParticipantActiveContestActiveTypes.HOLE_STROKE_UPDATE
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
