import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import MembersPageActions, { MembersPageTypes } from './actions';
import { initMembers } from './helpers';
import { selectLeagueUUID } from '@selectors/AppSelector';
import MembersPageContentMembersActions from './MembersContent/Members/actions';
import { LeagueService } from '@services';
import { BaseActions } from '@actions';

// Action Handlers

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
        yield put(MembersPageContentMembersActions.refresh());
        yield put(MembersPageActions.refreshSuccess());
    } catch (err) {
        yield put(MembersPageActions.refreshFailure(err));
    }
}

function* updateMemberStatus({ uuid, status }: AnyAction) {
    try {
        yield call(LeagueService.updateMember, uuid, { status });
        uuid = yield select(selectLeagueUUID);
        yield put(MembersPageActions.refresh(uuid)); // this feels weird
        yield put(MembersPageActions.updateMemberStatusSuccess(uuid, status));
    } catch (err) {
        yield put(MembersPageActions.updateMemberStatusFailure(err));
    }
}

export default function* MembersPageSaga() {
    yield all([
        takeLatest(MembersPageTypes.INIT, init),
        takeLatest(MembersPageTypes.REFRESH, refresh),
        takeLatest(MembersPageTypes.UPDATE_MEMBER_STATUS, updateMemberStatus),
    ]);
}
