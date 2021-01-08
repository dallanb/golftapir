import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import HomePageSiderContentCalendarActions, {
    HomePageSiderContentCalendarTypes,
} from './actions';

export function* fetchContestsCalendarList(
    options: any = { page: 1, per_page: 10 }
) {
    yield put(HomePageSiderContentCalendarActions.fetchData(options));
    const { success, failure } = yield race({
        success: take(HomePageSiderContentCalendarTypes.FETCH_DATA_SUCCESS),
        failure: take(HomePageSiderContentCalendarTypes.FETCH_DATA_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_ALL);
    }
    return success;
}
