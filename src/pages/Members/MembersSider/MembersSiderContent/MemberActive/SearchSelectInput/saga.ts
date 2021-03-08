import { AnyAction } from 'redux';
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import MembersPageSiderContentSearchActions, {
    MembersPageSiderContentSearchTypes,
} from './actions';
import { LeagueService, MemberService } from '@services';
import { selectLeagueUUID } from '@selectors/AppSelector';
import MembersPageContentMembersActions from '@pages/Members/MembersContent/Members/actions';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';

function* search({ key }: AnyAction) {
    try {
        // yield call(refreshMembersList, key);
        const { members }: any = yield call(MemberService.fetchMembers, {
            page: 1,
            per_page: 10,
            league_uuid: null,
            search: key,
        });
        yield put(MembersPageSiderContentSearchActions.searchSuccess(members));
    } catch (err) {
        yield put(MembersPageSiderContentSearchActions.searchFailure(err));
    }
}

function* invite({ uuid: user_uuid, email }: AnyAction) {
    try {
        const uuid = yield select(selectLeagueUUID);
        yield call(LeagueService.createMember, uuid, { user_uuid, email }); // Trigger an api error that says this person cant be added since they already exist
        yield put(MembersPageContentMembersActions.refresh());
        yield put(MembersPageSiderContentSearchActions.inviteSuccess());
    } catch (err) {
        if (err.response.status == 400) {
            message.error(CONSTANTS.LEAGUE.ERROR.MEMBER_INVITE_DUPLICATE);
        } else {
            message.error(CONSTANTS.LEAGUE.ERROR.MEMBER_INVITE);
        }
        yield put(MembersPageSiderContentSearchActions.inviteFailure(err));
    }
}

export default function* MembersPageSiderContentSearchSaga() {
    yield all([
        takeLatest(MembersPageSiderContentSearchTypes.SEARCH, search),
        takeLatest(MembersPageSiderContentSearchTypes.INVITE, invite),
    ]);
}
