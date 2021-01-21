import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { MemberService } from '@services';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import ContestsCreatePageContentContestSearchParticipantActions, {
    ContestsCreatePageContentContestSearchParticipantTypes,
} from './actions';

// need to add search more somehow
function* search({ key: search }: AnyAction) {
    try {
        const { members } = yield call(MemberService.fetchMembers, {
            page: 1,
            per_page: 10,
            league_uuid: yield select(selectMyLeagueUUID),
            include: 'avatar',
            search,
        });
        yield put(
            ContestsCreatePageContentContestSearchParticipantActions.searchSuccess(
                members
            )
        );
    } catch (err) {
        yield put(
            ContestsCreatePageContentContestSearchParticipantActions.searchFailure(
                err
            )
        );
    }
}

export default function* ContestsCreatePageContentContestSaga() {
    yield all([
        takeLatest(
            ContestsCreatePageContentContestSearchParticipantTypes.SEARCH,
            search
        ),
    ]);
}
