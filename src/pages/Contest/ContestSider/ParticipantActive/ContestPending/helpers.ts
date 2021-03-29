import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import ContestPageSiderParticipantActiveContestPendingActions, {
    ContestPageSiderParticipantActiveContestPendingTypes,
} from './actions';

export function* fetchPendingParticipants() {
    yield put(
        ContestPageSiderParticipantActiveContestPendingActions.fetchData(
            { page: 1, per_page: 10 },
            false
        )
    );
    const { success, failure } = yield race({
        success: take(
            ContestPageSiderParticipantActiveContestPendingTypes.FETCH_DATA_SUCCESS
        ),
        failure: take(
            ContestPageSiderParticipantActiveContestPendingTypes.FETCH_DATA_FAILURE
        ),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_PARTICIPANTS);
    }

    return success;
}
