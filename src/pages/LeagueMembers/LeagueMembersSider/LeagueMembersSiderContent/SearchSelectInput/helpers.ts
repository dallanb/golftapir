import { put, race, take } from 'redux-saga/effects';
import LeagueMembersPageContentMembersActions, {
    LeagueMembersPageContentMembersTypes,
} from '@pages/LeagueMembers/LeagueMembersContent/Members/actions';
import CONSTANTS from '@locale/en-CA';

export function* refreshMembersList() {
    yield put(
        LeagueMembersPageContentMembersActions.fetchData({
            page: 1,
            per_page: 10,
        })
    );
    const { failure } = yield race({
        success: take(LeagueMembersPageContentMembersTypes.FETCH_DATA_SUCCESS),
        failure: take(LeagueMembersPageContentMembersTypes.FETCH_DATA_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.MEMBER.ERROR.FETCH);
    }
    return;
}
