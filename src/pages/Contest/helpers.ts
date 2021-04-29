import { call, fork, put, select } from 'redux-saga/effects';
import { ContestService, NotificationService } from '@services';
import ContestPageActions from './actions';
import { selectLeagueMemberData } from '@selectors/AppSelector';

export function* initContest(uuid: string) {
    yield fork(initContestParticipant, uuid);
    const { contests: contest }: any = yield call(
        ContestService.fetchContestMaterialized,
        uuid
    );
    yield put(ContestPageActions.set({ contest }));
}

function* initContestParticipant(uuid: string) {
    try {
        const leagueMember = yield select(selectLeagueMemberData);
        const { participants: participant }: any = yield call(
            ContestService.fetchContestParticipantMember,
            uuid,
            leagueMember.member
        );
        yield put(ContestPageActions.set({ participant }));
    } catch (err) {
        console.error('Not a participant');
    }
}

export function* initSubscribed(uuid: string) {
    const { subscribed }: any = yield call(
        NotificationService.subscriptionExists,
        {
            uuid,
        }
    );
    yield put(ContestPageActions.set({ subscribed }));
}
