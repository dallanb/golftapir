import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import LeaguesPageSiderSearchActions, {
    LeaguesPageSiderSearchTypes,
} from './actions';
import { refreshLeaguesList } from './helpers';

function* search({ key }: AnyAction) {
    try {
        yield call(refreshLeaguesList, key);
        yield put(LeaguesPageSiderSearchActions.searchSuccess());
    } catch (err) {
        yield put(LeaguesPageSiderSearchActions.searchFailure(err));
    }
}

export default function* LeaguesPageSiderSearchSaga() {
    yield all([takeLatest(LeaguesPageSiderSearchTypes.SEARCH, search)]);
}
