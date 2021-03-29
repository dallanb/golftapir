import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ContestsPageSiderSearchActions, {
    ContestsPageSiderSearchTypes,
} from './actions';
import { refreshContestsList } from '@pages/Contests/ContestsSider/SearchInput/helpers';

function* search({ key }: AnyAction) {
    try {
        yield call(refreshContestsList, key);
        yield put(ContestsPageSiderSearchActions.searchSuccess());
    } catch (err) {
        yield put(ContestsPageSiderSearchActions.searchFailure(err));
    }
}

export default function* ContestsPageSiderSearchSaga() {
    yield all([takeLatest(ContestsPageSiderSearchTypes.SEARCH, search)]);
}
