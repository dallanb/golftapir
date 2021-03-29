import {
    all,
    call,
    debounce,
    fork,
    put,
    select,
    takeLatest,
} from 'redux-saga/effects';
import ContestPageSiderParticipantCompletedContestCompletedActions, {
    ContestPageSiderParticipantCompletedContestCompletedTypes,
} from './actions';

function* init() {
    try {
        yield put(
            ContestPageSiderParticipantCompletedContestCompletedActions.initSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageSiderParticipantCompletedContestCompletedActions.initFailure(
                err
            )
        );
    }
}

export default function* ContestPageSiderParticipantCompletedContestCompletedSaga() {
    yield all([
        takeLatest(
            ContestPageSiderParticipantCompletedContestCompletedTypes.INIT,
            init
        ),
    ]);
}
