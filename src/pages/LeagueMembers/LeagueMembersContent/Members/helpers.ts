import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import LeagueMembersPageContentMembersActions, {
    LeagueMembersPageContentMembersTypes,
} from './actions';

export function* fetchMembersList() {
    yield put(LeagueMembersPageContentMembersActions.fetchData());
    const { success, failure } = yield race({
        success: take(LeagueMembersPageContentMembersTypes.FETCH_DATA_SUCCESS),
        failure: take(LeagueMembersPageContentMembersTypes.FETCH_DATA_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.LEAGUE_MEMBERS.ERROR.FETCH_ALL);
    }
    return success;
}
