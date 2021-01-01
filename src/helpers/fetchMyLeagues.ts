import { put, race, take } from 'redux-saga/effects';
import { LeagueActions, LeagueTypes } from '@actions';

function* fetchMyLeagues(options = { page: 1, per_page: 10 }) {
    yield put(LeagueActions.fetchMyLeagues(options));
    const { success, failure } = yield race({
        success: take(LeagueTypes.FETCH_MY_LEAGUES_SUCCESS),
        failure: take(LeagueTypes.FETCH_MY_LEAGUES_FAILURE),
    });

    if (failure) {
        throw new Error(failure);
    }

    return success;
}

export default fetchMyLeagues;
