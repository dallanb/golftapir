import { put, race, take } from 'redux-saga/effects';
import { LeagueActions, LeagueTypes } from '@actions';

function* fetchLeague(uuid: string, options: { include?: string } = {}) {
    yield put(LeagueActions.fetchLeague(uuid, options));
    const { success, failure } = yield race({
        success: take(LeagueTypes.FETCH_LEAGUE_SUCCESS),
        failure: take(LeagueTypes.FETCH_LEAGUE_FAILURE),
    });

    if (failure) {
        throw new Error(failure);
    }

    return success;
}

export default fetchLeague;
