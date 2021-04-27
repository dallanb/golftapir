import {
    all,
    call,
    put,
    putResolve,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import MemberAppActions, { MemberAppTypes } from './actions';
import { BaseActions, BaseTypes } from '@actions';
import { ClientProxy } from '@services';
import { refreshAuth } from '@helpers';
import { socketEventHandlers } from './utils';
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
