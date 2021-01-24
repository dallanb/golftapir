import { put, race, take } from 'redux-saga/effects';
import { LeagueActions, LeagueTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchMyMembersMaterializedUser(options?: any) {
    yield put(LeagueActions.fetchMyMembersMaterializedUser(options));
    const { success, failure } = yield race({
        success: take(LeagueTypes.FETCH_MY_MEMBERS_MATERIALIZED_USER_SUCCESS),
        failure: take(LeagueTypes.FETCH_MY_MEMBERS_MATERIALIZED_USER_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.LEAGUE.ERROR.FETCH);
    }

    return success;
}

export default fetchMyMembersMaterializedUser;
