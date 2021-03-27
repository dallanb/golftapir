import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import LeagueHomePageSiderContentCalendarActions, {
    LeagueHomePageSiderContentCalendarTypes,
} from './actions';

export function* fetchContestsCalendarList(
    options: any = { page: 1, per_page: 10 }
) {
    yield put(LeagueHomePageSiderContentCalendarActions.fetchData(options));
    const { success, failure } = yield race({
        success: take(
            LeagueHomePageSiderContentCalendarTypes.FETCH_DATA_SUCCESS
        ),
        failure: take(
            LeagueHomePageSiderContentCalendarTypes.FETCH_DATA_FAILURE
        ),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_ALL);
    }
    return success;
}
