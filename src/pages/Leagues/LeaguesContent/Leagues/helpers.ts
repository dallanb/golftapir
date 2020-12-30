import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import LeaguesPageContentLeaguesActions, {
    LeaguesPageContentLeaguesTypes,
} from './actions';

export function* fetchLeaguesList(options: any = { page: 1, per_page: 10 }) {
    yield put(LeaguesPageContentLeaguesActions.fetchData(options));
    const { success, failure } = yield race({
        success: take(LeaguesPageContentLeaguesTypes.FETCH_DATA_SUCCESS),
        failure: take(LeaguesPageContentLeaguesTypes.FETCH_DATA_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_ALL);
    }
    return success;
}
