import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { LeagueService, MemberService } from '@services';
import MembersPageContentMembersActions, {
    MembersPageContentMembersTypes,
} from './actions';
import { fetchMembersList } from './helpers';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';

function* init() {
    try {
        yield call(fetchMembersList);
        yield put(MembersPageContentMembersActions.initSuccess());
    } catch (err) {
        yield put(MembersPageContentMembersActions.initFailure(err));
    }
}

function* refresh() {
    try {
        yield call(fetchMembersList);
        yield put(MembersPageContentMembersActions.refreshSuccess());
    } catch (err) {
        yield put(MembersPageContentMembersActions.refreshFailure(err));
    }
}

function* fetchData({
    options = {
        page: 1,
        per_page: 10,
        include: 'avatar',
    },
}: AnyAction) {
    try {
        const uuid = yield select(selectLeagueUUID);
        const { members, metadata } = yield call(MemberService.fetchMembers, {
            ...options,
            league_uuid: uuid,
        });
        yield put(
            MembersPageContentMembersActions.fetchDataSuccess(members, metadata)
        );
    } catch (err) {
        yield put(MembersPageContentMembersActions.fetchDataFailure(err));
    }
}

export default function* MembersPageContentMembersSaga() {
    yield all([
        takeLatest(MembersPageContentMembersTypes.INIT, init),
        takeLatest(MembersPageContentMembersTypes.REFRESH, refresh),
        takeLatest(MembersPageContentMembersTypes.FETCH_DATA, fetchData),
    ]);
}