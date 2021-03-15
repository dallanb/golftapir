import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import MembersPageActions, { MembersPageTypes } from './actions';
import { initMembers } from './helpers';
import { selectLeagueUUID } from '@selectors/AppSelector';
import MembersPageContentMembersActions from './MembersContent/Members/actions';
import { LeagueService } from '@services';
import { AppActions, BaseActions } from '@actions';

// Action Handlers
function* preInit({ data }: AnyAction) {}

function* init({ uuid }: AnyAction) {
    try {
        yield call(initMembers, uuid);
        yield put(MembersPageActions.initSuccess());
    } catch (err) {
        yield put(MembersPageActions.initFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        yield put(BaseActions.refreshMe(uuid));
        yield put(AppActions.refreshLeagueMember(uuid));
        yield put(AppActions.refreshLeagueMembers(uuid));
        yield put(MembersPageContentMembersActions.refresh());
        yield put(MembersPageActions.refreshSuccess());
    } catch (err) {
        yield put(MembersPageActions.refreshFailure(err));
    }
}

function* updateMemberStatus({ uuid, status }: AnyAction) {
    try {
        yield call(LeagueService.updateMember, uuid, { status });
        const leagueUUID = yield select(selectLeagueUUID);
        yield put(
            MembersPageActions.updateMemberStatusSuccess(leagueUUID, status)
        );
    } catch (err) {
        yield put(MembersPageActions.updateMemberStatusFailure(err));
    }
}

export default function* MembersPageSaga() {
    yield all([
        takeLatest(MembersPageTypes.PRE_INIT, preInit),
        takeLatest(MembersPageTypes.INIT, init),
        takeLatest(MembersPageTypes.REFRESH, refresh),
        takeLatest(MembersPageTypes.UPDATE_MEMBER_STATUS, updateMemberStatus),
    ]);
}
