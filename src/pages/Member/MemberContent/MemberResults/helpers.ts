import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import MemberPageContentMemberResultsActions, {
    MemberPageContentMemberResultsTypes,
} from './actions';

export function* fetchMemberResults() {
    yield put(MemberPageContentMemberResultsActions.fetchData());
    const { success, failure } = yield race({
        success: take(
            MemberPageContentMemberResultsTypes.FETCH_DATA_SUCCESS
        ),
        failure: take(
            MemberPageContentMemberResultsTypes.FETCH_DATA_FAILURE
        ),
    });
    if (failure) {
        throw new Error(CONSTANTS.COMPETITOR.ERROR.FETCH_CONTEST_RESULTS);
    }

    return success;
}
