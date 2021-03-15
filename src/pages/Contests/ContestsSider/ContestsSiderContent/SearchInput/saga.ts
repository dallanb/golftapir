import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ContestsPageSiderContentSearchActions, {
    ContestsPageSiderContentSearchTypes,
} from './actions';
import { refreshContestsList } from '@pages/Contests/ContestsSider/ContestsSiderContent/SearchInput/helpers';

function* search({ key }: AnyAction) {
    try {
        yield call(refreshContestsList, key);
        yield put(ContestsPageSiderContentSearchActions.searchSuccess());
    } catch (err) {
        yield put(
            ContestsPageSiderContentSearchActions.searchFailure(err)
        );
    }
}

export default function* ContestsPageSiderContentSearchSaga() {
    yield all([takeLatest(ContestsPageSiderContentSearchTypes.SEARCH, search)]);
}
