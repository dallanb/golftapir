import {
    all,
    call,
    put,
    putResolve,
    take,
    takeLatest,
} from 'redux-saga/effects';
import MemberAppActions, { MemberAppTypes } from './actions';
import { BaseActions, BaseTypes } from '@actions';
import { ClientProxy } from '@services';
import { refreshAuth } from '@helpers';
import { socketEventHandlers } from './utils';

// Action Handlers
function* init() {
    try {
        if (!ClientProxy.accessToken) yield call(refreshAuth);
        // yield put(BaseActions.initSockets(socketEventHandlers));
        yield put(BaseActions.initMe(null));
        yield put(BaseActions.initLeagues());
        yield put(BaseActions.initNotifications());

        yield put(MemberAppActions.initSuccess());
    } catch (err) {
        yield put(MemberAppActions.initFailure(err));
    }
}

function* terminate() {
    try {
        // yield put(BaseActions.terminateSockets());
        // yield take(BaseTypes.TERMINATE_SOCKETS_SUCCESS);
        yield put(MemberAppActions.terminateSuccess());
    } catch (err) {
        console.error(err);
        yield put(MemberAppActions.terminateFailure(err));
    }
}

function* refresh() {
    try {
        yield put(BaseActions.refreshMe());
        yield put(MemberAppActions.refreshSuccess());
    } catch (err) {
        yield put(MemberAppActions.refreshFailure());
    }
}

export default function* MemberAppSaga() {
    yield all([
        takeLatest(MemberAppTypes.INIT, init),
        takeLatest(MemberAppTypes.TERMINATE, terminate),
        takeLatest(MemberAppTypes.REFRESH, refresh),
    ]);
}
