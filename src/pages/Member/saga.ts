import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import MemberPageActions, { MemberPageTypes } from './actions';
import { initMember } from './helpers';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';
import { fetchMyMemberUser } from '@helpers';
import { MemberService } from '@services';

// Action Handlers

function* init({ uuid }: AnyAction) {
    try {
        yield call(initMember, uuid);
        yield put(MemberPageActions.initSuccess());
    } catch (err) {
        yield put(MemberPageActions.initFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        yield call(fetchMyMemberUser, {
            league_uuid: uuid,
            include: 'avatar',
        });
        yield put(MemberPageActions.refreshSuccess());
    } catch (err) {
        yield put(MemberPageActions.refreshFailure(err));
    }
}

function* updateMemberStatus({ uuid, status }: AnyAction) {
    try {
        yield call(MemberService.updateMember, uuid, { status });
        uuid = yield select(selectLeagueUUID);
        yield put(MemberPageActions.refresh(uuid)); // this feels weird
        yield put(MemberPageActions.updateMemberStatusSuccess(uuid, status));
    } catch (err) {
        yield put(MemberPageActions.updateMemberStatusFailure(err));
    }
}

export default function* MemberPageSaga() {
    yield all([
        takeLatest(MemberPageTypes.INIT, init),
        takeLatest(MemberPageTypes.REFRESH, refresh),
        takeLatest(MemberPageTypes.UPDATE_MEMBER_STATUS, updateMemberStatus),
    ]);
}
