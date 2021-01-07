import {
    all,
    call,
    debounce,
    fork,
    put,
    select,
    takeLatest,
} from 'redux-saga/effects';
import ContestPageSiderContentParticipantCompletedContestCompletedActions, {
    ContestPageSiderContentParticipantCompletedContestCompletedTypes,
} from './actions';

function* init() {
    try {
        yield put(
            ContestPageSiderContentParticipantCompletedContestCompletedActions.initSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageSiderContentParticipantCompletedContestCompletedActions.initFailure(
                err
            )
        );
    }
}

export default function* ContestPageSiderContentParticipantCompletedContestCompletedSaga() {
    yield all([
        takeLatest(
            ContestPageSiderContentParticipantCompletedContestCompletedTypes.INIT,
            init
        ),
    ]);
}
