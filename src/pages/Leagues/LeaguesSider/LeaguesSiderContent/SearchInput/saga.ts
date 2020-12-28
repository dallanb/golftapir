import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import LeaguesPageSiderContentSearchActions, {
    LeaguesPageSiderContentSearchTypes,
} from './actions';
import { refreshLeaguesList } from '@pages/Leagues/LeaguesSider/LeaguesSiderContent/SearchInput/helpers';

function* search({ key }: AnyAction) {
    try {
        yield call(refreshLeaguesList, key);
        yield put(LeaguesPageSiderContentSearchActions.searchSuccess());
    } catch (err) {
        yield put(LeaguesPageSiderContentSearchActions.searchFailure(err));
    }
}

export default function* LeaguesPageSiderContentSearchSaga() {
    yield all([takeLatest(LeaguesPageSiderContentSearchTypes.SEARCH, search)]);
}
