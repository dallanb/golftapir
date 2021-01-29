import { all, call, put, race, take, takeLatest } from 'redux-saga/effects';
import {
    BaseActions,
    BaseTypes,
    NotificationActions,
    NotificationTypes,
    SocketActions,
} from '@actions';
import { requestToken } from '@helpers';
import { AnyAction } from 'redux';
import { LeagueService, MemberService } from '@services';

function* initMe({ league_uuid }: any) {
    try {
        const { members: me } = yield call(
            MemberService.fetchMemberUser,
            'me',
            {
                league_uuid,
                include: 'avatar,stat',
            }
        );
        yield put(BaseActions.initMeSuccess(me));
    } catch (err) {
        yield put(BaseActions.initMeFailure(err));
    }
}

function* initLeagues() {
    try {
        const { leagues } = yield call(
            LeagueService.fetchUserMemberLeagues,
            'me',
            {
                page: 1,
                per_page: 100,
                include: 'avatar',
            }
        );
        yield put(BaseActions.initLeaguesSuccess(leagues));
    } catch (err) {
        yield put(BaseActions.initLeaguesFailure(err));
    }
}

function* initSockets({ handlers }: AnyAction) {
    try {
        yield put(
            SocketActions.init({
                eventHandler: handlers,
            })
        );
        yield put(BaseActions.initSocketsSuccess());
    } catch (err) {
        yield put(BaseActions.initSocketsFailure(err));
    }
}

function* terminateSockets() {
    try {
        yield put(SocketActions.terminate());
        yield put(BaseActions.terminateSocketsSuccess());
    } catch (err) {
        yield put(BaseActions.terminateSocketsFailure(err));
    }
}

// TODO: NOTIFICATIONS SHOULD BECOME PART OF BASE
function* initNotifications() {
    // prepare notifications
    const token = yield call(requestToken);

    yield put(NotificationActions.setToken(token));
    const { success, failure } = yield race({
        success: take(NotificationTypes.SET_TOKEN_SUCCESS),
        failure: take(NotificationTypes.SET_TOKEN_FAILURE),
    });

    yield put(NotificationActions.fetchPending());

    if (failure) {
        throw new Error('Unable to set token');
    }
}

export default function* BaseSaga() {
    yield all([
        takeLatest(BaseTypes.INIT_ME, initMe),
        takeLatest(BaseTypes.INIT_LEAGUES, initLeagues),
        takeLatest(BaseTypes.INIT_SOCKETS, initSockets),
        takeLatest(BaseTypes.TERMINATE_SOCKETS, terminateSockets),
        takeLatest(BaseTypes.INIT_NOTIFICATIONS, initNotifications),
    ]);
}
