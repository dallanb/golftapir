import { all, put, race, select, take, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import config from 'config';
import ContestsCreatePageActions, { ContestsCreatePageTypes } from './actions';
import { selectData } from '@selectors/AuthSelectors';

function* init() {
    try {
        const data = yield select(selectData);
        const createFormInitialValues = {
            owner_uuid: _.get(data, ['uuid']),
            sport_uuid: config.GOLF_UUID,
        };
        yield put(ContestsCreatePageActions.set({ createFormInitialValues }));
        yield put(ContestsCreatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestsCreatePageActions.initFailure(err));
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([takeLatest(ContestsCreatePageTypes.INIT, init)]);
}
