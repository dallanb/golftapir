import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import MemberPageActions, { MemberPageTypes } from './actions';
import { initMember } from './helpers';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';
import { fetchMyMemberUser } from '@helpers';
import { LeagueService } from '@services';

// Action Handlers
function* preInit({ data: member }: AnyAction) {
    yield put(MemberPageActions.set({ member }));
}

function* init({ uuid }: AnyAction) {
    try {
        const { members: member } = yield call(
            LeagueService.fetchMemberMaterialized,
            uuid,
            {
                league_uuid: yield select(selectLeagueUUID),
            }
        );
        yield put(MemberPageActions.set({ member }));
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

export default function* MemberPageSaga() {
    yield all([
        takeLatest(MemberPageTypes.PRE_INIT, preInit),
        takeLatest(MemberPageTypes.INIT, init),
        takeLatest(MemberPageTypes.REFRESH, refresh),
    ]);
}
