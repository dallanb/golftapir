import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import LeagueMembersPageSiderContentSearchActions, {
    LeagueMembersPageSiderContentSearchTypes,
} from './actions';
import { refreshMembersList } from './helpers';
import {LeagueService, MemberService} from '@services';
import {selectLeagueUUID} from "@apps/LeagueApp/selector";

function* search({ key }: AnyAction) {
    try {
        // yield call(refreshMembersList, key);
        const { members } = yield call(MemberService.fetchMembers, {
            page: 1,
            per_page: 10,
            search: key,
        });
        yield put(
            LeagueMembersPageSiderContentSearchActions.searchSuccess(members)
        );
    } catch (err) {
        yield put(
            LeagueMembersPageSiderContentSearchActions.searchFailure(err)
        );
    }
}

function* invite({ uuid: user_uuid }: AnyAction) {
    try {
        const uuid = yield select(selectLeagueUUID)
        yield call(LeagueService.createMember, uuid, {user_uuid});
        yield call(refreshMembersList);
        yield put(
            LeagueMembersPageSiderContentSearchActions.inviteSuccess()
        );
    } catch (err) {
        yield put(
            LeagueMembersPageSiderContentSearchActions.inviteFailure(err)
        );
    }
}

export default function* LeagueMembersPageSiderContentSearchSaga() {
    yield all([
        takeLatest(LeagueMembersPageSiderContentSearchTypes.SEARCH, search),
        takeLatest(LeagueMembersPageSiderContentSearchTypes.INVITE, invite),
    ]);
}
