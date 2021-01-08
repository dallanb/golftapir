import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import HomePageSiderContentCalendarActions, {
    HomePageSiderContentCalendarTypes,
} from './actions';
import { fetchContestsCalendarList } from './helpers';
import { ContestService } from '@services';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';

function* init({ options }: AnyAction) {
    try {
        yield call(fetchContestsCalendarList, options);
        yield put(HomePageSiderContentCalendarActions.initSuccess());
    } catch (err) {
        yield put(HomePageSiderContentCalendarActions.initFailure(err));
    }
}

function* fetchData({ options }: AnyAction) {
    try {
        const { contests, _metadata: metadata } = yield call(
            ContestService.fetchContestsCalendar,
            {
                ...options,
                league_uuid: yield select(selectLeagueUUID),
            }
        );
        yield put(
            HomePageSiderContentCalendarActions.fetchDataSuccess(
                contests,
                metadata
            )
        );
    } catch (err) {
        yield put(HomePageSiderContentCalendarActions.fetchDataFailure(err));
    }
}

export default function* HomePageSiderContentCalendarSaga() {
    yield all([
        takeLatest(HomePageSiderContentCalendarTypes.INIT, init),
        takeLatest(HomePageSiderContentCalendarTypes.FETCH_DATA, fetchData),
    ]);
}
