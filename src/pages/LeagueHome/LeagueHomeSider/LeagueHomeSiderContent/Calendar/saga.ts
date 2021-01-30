import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import LeagueHomePageSiderContentCalendarActions, {
    LeagueHomePageSiderContentCalendarTypes,
} from './actions';
import { fetchContestsCalendarList } from './helpers';
import { ContestService } from '@services';
import { selectLeagueUUID } from '@selectors/AppSelector';

function* init({ options }: AnyAction) {
    try {
        yield call(fetchContestsCalendarList, options);
        yield put(LeagueHomePageSiderContentCalendarActions.initSuccess());
    } catch (err) {
        yield put(LeagueHomePageSiderContentCalendarActions.initFailure(err));
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
            LeagueHomePageSiderContentCalendarActions.fetchDataSuccess(
                contests,
                metadata
            )
        );
    } catch (err) {
        yield put(
            LeagueHomePageSiderContentCalendarActions.fetchDataFailure(err)
        );
    }
}

export default function* LeagueHomePageSiderContentCalendarSaga() {
    yield all([
        takeLatest(LeagueHomePageSiderContentCalendarTypes.INIT, init),
        takeLatest(
            LeagueHomePageSiderContentCalendarTypes.FETCH_DATA,
            fetchData
        ),
    ]);
}
