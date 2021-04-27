import { all, call, put, select, take, takeLatest } from 'redux-saga/effects';
import { isNil as _isNil } from 'lodash';
import { AnyAction } from 'redux';
import { get as _get, isObject as _isObject } from 'lodash';
import LeagueAppActions, { LeagueAppTypes } from './actions';
import { AppActions, AppTypes, BaseActions, SpinnerActions } from '@actions';
import { ClientProxy } from '@services';
import { refreshAuth } from '@helpers';
import { fetchLeague, fetchLeagueMember, fetchLeagueMembers } from './helpers';
import { selectLeagueData } from '@apps/LeagueApp/selector';
import { selectData, selectMyUserUUID } from '@selectors/BaseSelector';
import CONSTANTS from '@locale/en-CA';

// Action Handlers
function* preInit({ data }: AnyAction) {
    const league = _get(data, ['league'], undefined);
    const member = _get(data, ['member'], undefined);
    if (league && _isObject(league)) {
        yield put(LeagueAppActions.setLeague(league));
    }
    if (member && _isObject(member)) {
        yield put(LeagueAppActions.setLeagueMember(member));
    }
}

function* init({ uuid }: AnyAction) {
    try {
        const data = yield select(selectData);
        if (!data || !data.isLoggedIn) {
            throw new Error(CONSTANTS.AUTH.ERROR.SESSION_LOGIN);
        }
        if (!ClientProxy.accessToken) yield call(refreshAuth);
        yield put(BaseActions.initMe(uuid));
        yield put(BaseActions.initLeagues());
        yield put(BaseActions.initNotifications());
        yield put(LeagueAppActions.initLeague(uuid));
        yield put(LeagueAppActions.initLeagueMember(uuid));
        yield put(LeagueAppActions.initLeagueMembers(uuid));
        yield put(LeagueAppActions.initSuccess());
    } catch (err) {
        yield put(LeagueAppActions.initFailure(err));
        yield put(LeagueAppActions.initLeagueFailure(err));
        yield put(LeagueAppActions.initLeagueMemberFailure(err));
        yield put(LeagueAppActions.initLeagueMembersFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        yield put(BaseActions.refreshMe(uuid));

        yield put(AppActions.refreshLeague(uuid));

        yield put(AppActions.refreshLeagueMember(uuid));

        yield put(AppActions.refreshLeagueMembers(uuid));
        yield put(LeagueAppActions.refreshSuccess());
    } catch (err) {
        yield put(LeagueAppActions.refreshFailure(err));
    }
}

function* terminate() {
    try {
        yield put(LeagueAppActions.terminateSuccess());
    } catch (err) {
        console.error(err);
        yield put(LeagueAppActions.terminateFailure(err));
    }
}

function* initLeague({ uuid }: AnyAction) {
    try {
        if (_isNil(yield select(selectLeagueData))) {
            yield call(fetchLeague, uuid);
        }
        yield put(LeagueAppActions.initLeagueSuccess());
    } catch (err) {
        yield put(LeagueAppActions.initLeagueFailure(err));
    }
}

function* initLeagueMember({ uuid }: AnyAction) {
    try {
        if (_isNil(yield select(selectLeagueData))) {
            yield call(fetchLeagueMember, uuid);
        }
        yield put(LeagueAppActions.initLeagueMemberSuccess());
    } catch (err) {
        yield put(LeagueAppActions.initLeagueMemberFailure(err));
    }
}

function* initLeagueMembers({ uuid }: AnyAction) {
    try {
        yield call(fetchLeagueMembers, uuid);
        yield put(LeagueAppActions.initLeagueMembersSuccess());
    } catch (err) {
        yield put(LeagueAppActions.fetchLeagueMembersFailure(err));
    }
}

function* leagueMemberActiveEvent({ uuid, payload }: AnyAction) {
    const { sender } = payload;
    const myUserUUID = yield select(selectMyUserUUID);
    if (myUserUUID == sender) {
        yield put(BaseActions.refreshMe(uuid));
        yield put(AppActions.refreshLeagueMember(uuid));
        yield put(AppActions.refreshLeagueMembers(uuid));
        yield put(SpinnerActions.closeSpinner());
    } else {
        yield put(AppActions.refreshLeagueMembers(uuid));
    }
}

function* leagueMemberInactiveEvent({ uuid, payload }: AnyAction) {
    const { sender } = payload;
    const myUserUUID = yield select(selectMyUserUUID);
    if (myUserUUID == sender) {
        yield put(AppActions.refreshLeagueMember(uuid));
        yield put(SpinnerActions.closeSpinner());
    } else {
        yield put(AppActions.refreshLeagueMembers(uuid));
    }
}

function* appRefreshLeague({ uuid }: AnyAction) {
    try {
        yield call(fetchLeague, uuid);
        yield put(AppActions.refreshLeagueSuccess());
    } catch (err) {
        yield put(AppActions.refreshLeagueFailure(err));
    }
}

function* appRefreshLeagueMember({ uuid }: AnyAction) {
    try {
        yield call(fetchLeagueMember, uuid);
        yield put(AppActions.refreshLeagueMemberSuccess());
    } catch (err) {
        yield put(AppActions.refreshLeagueMemberFailure(err));
    }
}

function* appRefreshLeagueMembers({ uuid }: AnyAction) {
    try {
        yield call(fetchLeagueMembers, uuid);
        yield put(AppActions.refreshLeagueMembersSuccess());
    } catch (err) {
        yield put(AppActions.refreshLeagueMembersFailure(err));
    }
}

export default function* LeagueAppSaga() {
    yield all([
        takeLatest(LeagueAppTypes.PRE_INIT, preInit),
        takeLatest(LeagueAppTypes.INIT, init),
        takeLatest(LeagueAppTypes.REFRESH, refresh),
        takeLatest(LeagueAppTypes.TERMINATE, terminate),
        takeLatest(LeagueAppTypes.INIT_LEAGUE, initLeague),
        takeLatest(LeagueAppTypes.INIT_LEAGUE_MEMBER, initLeagueMember),
        takeLatest(LeagueAppTypes.INIT_LEAGUE_MEMBERS, initLeagueMembers),
        takeLatest(
            LeagueAppTypes.LEAGUE_MEMBER_ACTIVE_EVENT,
            leagueMemberActiveEvent
        ),
        takeLatest(
            LeagueAppTypes.LEAGUE_MEMBER_INACTIVE_EVENT,
            leagueMemberInactiveEvent
        ),
        takeLatest(AppTypes.REFRESH_LEAGUE, appRefreshLeague),
        takeLatest(AppTypes.REFRESH_LEAGUE_MEMBER, appRefreshLeagueMember),
        takeLatest(AppTypes.REFRESH_LEAGUE_MEMBERS, appRefreshLeagueMembers),
    ]);
}
