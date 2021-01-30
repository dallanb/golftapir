import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { get as _get, isObject as _isObject } from 'lodash';
import LeagueAppActions, { LeagueAppTypes } from './actions';
import { AppActions, AppTypes, BaseActions, SocketActions } from '@actions';
import { socketEventHandlers } from './utils';
import { ClientProxy, LeagueService } from '@services';
import { refreshAuth } from '@helpers';
import {
    initLeague,
    initLeagueMember,
    refreshLeague,
    refreshLeagueMember,
} from './helpers';

// Action Handlers
function* preInit({ data }: AnyAction) {
    const league = _get(data, ['league'], undefined);
    const member = _get(data, ['member'], undefined);
    if (league && _isObject(league)) {
        yield put(LeagueAppActions.fetchLeagueSuccess(league));
    }
    if (member && _isObject(member)) {
        yield put(LeagueAppActions.fetchLeagueMemberSuccess(member));
    }
}

function* init({ uuid }: AnyAction) {
    try {
        if (!ClientProxy.accessToken) yield call(refreshAuth);
        yield put(BaseActions.initMe(uuid));
        yield put(BaseActions.initLeagues());
        yield put(BaseActions.initSockets(socketEventHandlers));
        yield put(BaseActions.initNotifications());
        yield fork(initLeague, uuid);
        yield fork(initLeagueMember, uuid);
        yield put(LeagueAppActions.initSuccess());
    } catch (err) {
        yield put(LeagueAppActions.initFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        yield put(BaseActions.refreshMe(uuid));

        yield put(
            LeagueAppActions.fetchLeague(uuid, {
                include: 'avatar',
            })
        );

        yield put(
            LeagueAppActions.fetchLeagueMember('me', {
                league_uuid: uuid,
            })
        );
        yield put(LeagueAppActions.refreshSuccess());
    } catch (err) {
        yield put(LeagueAppActions.refreshFailure(err));
    }
}

function* terminate() {
    try {
        yield put(SocketActions.terminate());
    } catch (err) {
        console.error(err);
    }
}

function* fetchLeague({ uuid, options }: AnyAction) {
    try {
        const { leagues: league } = yield call(
            LeagueService.fetchLeague,
            uuid,
            options
        );
        yield put(LeagueAppActions.fetchLeagueSuccess(league));
    } catch (err) {
        yield put(LeagueAppActions.fetchLeagueFailure(err));
    }
}

function* fetchLeagueMember({ uuid, options }: AnyAction) {
    try {
        const { members: leagueMember } = yield call(
            LeagueService.fetchMembersMaterializedUser,
            uuid,
            options
        );
        yield put(LeagueAppActions.fetchLeagueMemberSuccess(leagueMember));
    } catch (err) {
        yield put(LeagueAppActions.fetchLeagueMemberFailure(err));
    }
}

function* appRefreshLeague({ uuid }: AnyAction) {
    try {
        yield fork(refreshLeague, uuid);
        yield put(AppActions.refreshLeagueSuccess());
    } catch (err) {
        yield put(AppActions.refreshLeagueFailure(err));
    }
}

function* appRefreshLeagueMember({ uuid }: AnyAction) {
    try {
        yield fork(refreshLeagueMember, uuid);
        yield put(AppActions.refreshLeagueMemberSuccess());
    } catch (err) {
        yield put(AppActions.refreshLeagueMemberFailure(err));
    }
}

export default function* LeagueAppSaga() {
    yield all([
        takeLatest(LeagueAppTypes.PRE_INIT, preInit),
        takeLatest(LeagueAppTypes.INIT, init),
        takeLatest(LeagueAppTypes.REFRESH, refresh),
        takeLatest(LeagueAppTypes.TERMINATE, terminate),
        takeLatest(LeagueAppTypes.FETCH_LEAGUE, fetchLeague),
        takeLatest(LeagueAppTypes.FETCH_LEAGUE_MEMBER, fetchLeagueMember),
        takeLatest(AppTypes.REFRESH_LEAGUE, appRefreshLeague),
        takeLatest(AppTypes.REFRESH_LEAGUE_MEMBER, appRefreshLeagueMember),
    ]);
}
