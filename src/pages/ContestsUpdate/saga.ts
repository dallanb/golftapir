import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ContestsUpdatePageActions, { ContestsUpdatePageTypes } from './actions';
import { fetchContest } from '@helpers';

function* init({ uuid }: AnyAction) {
    try {
        const { data } = yield call(fetchContest, uuid);

        yield put(ContestsUpdatePageActions.set({ title: data.name }));
        yield put(ContestsUpdatePageActions.set({ contest: data }));

        yield put(
            ContestsUpdatePageActions.set({
                updateFormInitialValues: {
                    name,
                },
            })
        );

        yield put(ContestsUpdatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestsUpdatePageActions.initFailure(err));
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([takeLatest(ContestsUpdatePageTypes.INIT, init)]);
}
