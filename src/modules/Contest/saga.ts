import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import ContestModuleActions, { ContestModuleTypes } from './actions';
import { BaseActions } from '@actions';
import { ClientProxy } from '@services';
import { refreshAuth } from '@helpers';
import { selectData } from '@selectors/BaseSelector';
import CONSTANTS from '@locale/en-CA';

// Action Handlers
function* init() {
    try {
        const data = yield select(selectData);
        console.log(data);
        if (!data || !data.isLoggedIn) {
            throw new Error(CONSTANTS.AUTH.ERROR.SESSION_LOGIN);
        }
        if (!ClientProxy.accessToken) yield call(refreshAuth);
        // yield put(BaseActions.initSockets(socketEventHandlers));
        yield put(BaseActions.initMe(null));
        yield put(BaseActions.initLeagues());
        yield put(BaseActions.initNotifications());

        yield put(ContestModuleActions.initSuccess());
    } catch (err) {
        yield put(ContestModuleActions.initFailure(err));
    }
}

function* terminate() {
    try {
        // yield put(BaseActions.terminateSockets());
        // yield take(BaseTypes.TERMINATE_SOCKETS_SUCCESS);
        yield put(ContestModuleActions.terminateSuccess());
    } catch (err) {
        console.error(err);
        yield put(ContestModuleActions.terminateFailure(err));
    }
}

function* refresh() {
    try {
        yield put(BaseActions.refreshMe());
        yield put(ContestModuleActions.refreshSuccess());
    } catch (err) {
        yield put(ContestModuleActions.refreshFailure());
    }
}

export default function* ContestModuleSaga() {
    yield all([
        takeLatest(ContestModuleTypes.INIT, init),
        takeLatest(ContestModuleTypes.TERMINATE, terminate),
        takeLatest(ContestModuleTypes.REFRESH, refresh),
    ]);
}
