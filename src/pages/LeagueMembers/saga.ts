import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import LeagueMembersPageActions, { LeagueMembersPageTypes } from './actions';
import { initLeagueMembers } from './helpers';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';
import { fetchMyMemberUser } from '@helpers';
import LeagueMembersPageContentMembersActions from './LeagueMembersContent/Members/actions';
import { MemberService } from '@services';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        yield call(initLeagueMembers, uuid);
        yield put(LeagueMembersPageActions.initSuccess());
    } catch (err) {
        yield put(LeagueMembersPageActions.initFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        yield call(fetchMyMemberUser, {
            league_uuid: uuid,
            include: 'avatar',
        });
        yield put(LeagueMembersPageContentMembersActions.refresh());
        yield put(LeagueMembersPageActions.refreshSuccess());
    } catch (err) {
        yield put(LeagueMembersPageActions.refreshFailure(err));
    }
}

function* updateMemberStatus({ uuid, status }: AnyAction) {
    try {
        yield call(MemberService.updateMember, uuid, { status });
        uuid = yield select(selectLeagueUUID);
        yield put(LeagueMembersPageActions.refresh(uuid)); // this feels weird
        yield put(
            LeagueMembersPageActions.updateMemberStatusSuccess(uuid, status)
        );
    } catch (err) {
        yield put(LeagueMembersPageActions.updateMemberStatusFailure(err));
    }
}

export default function* LeagueMembersPageSaga() {
    yield all([
        takeLatest(LeagueMembersPageTypes.INIT, init),
        takeLatest(LeagueMembersPageTypes.REFRESH, refresh),
        takeLatest(
            LeagueMembersPageTypes.UPDATE_MEMBER_STATUS,
            updateMemberStatus
        ),
    ]);
}
