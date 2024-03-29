import {
    all,
    call,
    debounce,
    delay,
    put,
    race,
    take,
    takeLatest,
} from 'redux-saga/effects';
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
        const { members: me }: any = yield call(
            MemberService.fetchMemberUser,
            'me',
            {
                league_uuid,
                include: 'avatar,stat,wallet',
            }
        );
        yield put(BaseActions.initMeSuccess(me));
    } catch (err) {
        yield put(BaseActions.initMeFailure(err));
    }
}

function* refreshMe({ league_uuid }: any) {
    try {
        const { members: me }: any = yield call(
            MemberService.fetchMemberUser,
            'me',
            {
                league_uuid,
                include: 'avatar,stat,wallet',
            }
        );
        yield put(BaseActions.refreshMeSuccess(me));
    } catch (err) {
        yield put(BaseActions.refreshMeFailure(err));
    }
}

function* refreshMeDebounce({ league_uuid, ms }: any) {
    yield delay(ms);
    yield put(BaseActions.refreshMe(league_uuid));
}

function* initLeagues() {
    try {
        const { leagues }: any = yield call(
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

function* refreshLeagues() {
    try {
        const { leagues }: any = yield call(
            LeagueService.fetchUserMemberLeagues,
            'me',
            {
                page: 1,
                per_page: 100,
                include: 'avatar',
            }
        );
        yield put(BaseActions.refreshLeaguesSuccess(leagues));
    } catch (err) {
        yield put(BaseActions.refreshLeaguesFailure(err));
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
    const token: any = yield call(requestToken);

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
        takeLatest(BaseTypes.REFRESH_ME, refreshMe),
        takeLatest(BaseTypes.REFRESH_ME_DEBOUNCE, refreshMeDebounce),
        takeLatest(BaseTypes.INIT_LEAGUES, initLeagues),
        takeLatest(BaseTypes.REFRESH_LEAGUES, refreshLeagues),
        takeLatest(BaseTypes.INIT_SOCKETS, initSockets),
        takeLatest(BaseTypes.TERMINATE_SOCKETS, terminateSockets),
        takeLatest(BaseTypes.INIT_NOTIFICATIONS, initNotifications),
    ]);
}
