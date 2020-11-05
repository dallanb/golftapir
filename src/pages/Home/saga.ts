import { all, put, select, takeLatest } from 'redux-saga/effects';
import { selectMe } from '@selectors/BaseSelector';
import HomePageActions, { HomePageTypes } from './actions';

function* init() {
    try {
        const { first_name, last_name } = yield select(selectMe);
        yield put(HomePageActions.set({ title: `${first_name} ${last_name}` }));

        yield put(HomePageActions.initSuccess());
    } catch (err) {
        yield put(HomePageActions.initFailure());
    }
}

export default function* HomePageSaga() {
    yield all([takeLatest(HomePageTypes.INIT, init)]);
}
