import { AnyAction } from 'redux';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { LeagueService } from '@services';
import LeaguesPageContentLeaguesActions, {
    LeaguesPageContentLeaguesTypes,
} from './actions';
import { fetchLeaguesList } from './helpers';

function* init() {
    try {
        yield call(fetchLeaguesList, {
            page: 1,
            per_page: 10,
            include: 'avatar',
        });
        yield put(LeaguesPageContentLeaguesActions.initSuccess());
    } catch (err) {
        yield put(LeaguesPageContentLeaguesActions.initFailure(err.toJSON()));
    }
}

function* fetchData({ options = { page: 1, per_page: 10 } }: AnyAction) {
    try {
        const { leagues, _metadata: metadata }: any = yield call(
            LeagueService.fetchLeagues,
            options
        );
        yield put(
            LeaguesPageContentLeaguesActions.fetchDataSuccess(leagues, metadata)
        );
    } catch (err) {
        yield put(
            LeaguesPageContentLeaguesActions.fetchDataFailure(err.toJSON())
        );
    }
}

export default function* LeaguesPageContentLeaguesSaga() {
    yield all([
        takeLatest(LeaguesPageContentLeaguesTypes.INIT, init),
        takeLatest(LeaguesPageContentLeaguesTypes.FETCH_DATA, fetchData),
    ]);
}
