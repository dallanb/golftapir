import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ContestModuleActions, { ContestModuleTypes } from './actions';
import { BaseActions } from '@actions';
import { get as _get } from 'lodash';
import { fetchContest } from './helpers';

// Action Handlers
function* preInit({ data }: AnyAction) {
    const contest = _get(data, ['contest'], undefined);
    const participant = _get(data, ['participant'], undefined);
    if (contest) {
        yield put(ContestModuleActions.set({ contest }));
    }
    if (participant) {
        yield put(ContestModuleActions.set({ participant }));
    }
}

function* init({ uuid }: AnyAction) {
    try {
        yield call(fetchContest, uuid);
        yield put(ContestModuleActions.initSuccess());
    } catch (err) {
        yield put(ContestModuleActions.initFailure(err));
    }
}

function* terminate() {
    try {
        yield put(ContestModuleActions.terminateSuccess());
    } catch (err) {
        console.error(err);
        yield put(ContestModuleActions.terminateFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        yield call(fetchContest, uuid);
        yield put(ContestModuleActions.refreshSuccess());
    } catch (err) {
        yield put(ContestModuleActions.refreshFailure());
    }
}

export default function* ContestModuleSaga() {
    yield all([
        takeLatest(ContestModuleTypes.PRE_INIT, preInit),
        takeLatest(ContestModuleTypes.INIT, init),
        takeLatest(ContestModuleTypes.TERMINATE, terminate),
        takeLatest(ContestModuleTypes.REFRESH, refresh),
    ]);
}
