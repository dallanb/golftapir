import { put, race, take } from 'redux-saga/effects';
import LeaguesPageContentLeaguesActions, {
    LeaguesPageContentLeaguesTypes,
} from '@pages/Leagues/LeaguesContent/Leagues/actions';
import CONSTANTS from '@locale/en-CA';

export function* refreshLeaguesList(search: string) {
    const options = Object.assign(
        { page: 1, per_page: 10 },
        search && { search }
    );
    yield put(LeaguesPageContentLeaguesActions.fetchData(options));
    const { failure } = yield race({
        success: take(LeaguesPageContentLeaguesTypes.FETCH_DATA_SUCCESS),
        failure: take(LeaguesPageContentLeaguesTypes.FETCH_DATA_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
    return;
}
