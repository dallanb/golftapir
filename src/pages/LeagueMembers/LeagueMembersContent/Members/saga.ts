import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { LeagueService, MemberService } from '@services';
import LeagueMembersPageContentMembersActions, {
    LeagueMembersPageContentMembersTypes,
} from './actions';
import { fetchMembersList } from './helpers';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';

function* init() {
    try {
        yield call(fetchMembersList);
        yield put(LeagueMembersPageContentMembersActions.initSuccess());
    } catch (err) {
        yield put(LeagueMembersPageContentMembersActions.initFailure(err));
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
            LeagueMembersPageContentMembersActions.fetchDataSuccess(
                members,
                metadata
            )
        );
    } catch (err) {
        yield put(LeagueMembersPageContentMembersActions.fetchDataFailure(err));
    }
}

export default function* LeagueMembersPageContentMembersSaga() {
    yield all([
        takeLatest(LeagueMembersPageContentMembersTypes.INIT, init),
        takeLatest(LeagueMembersPageContentMembersTypes.FETCH_DATA, fetchData),
    ]);
}
