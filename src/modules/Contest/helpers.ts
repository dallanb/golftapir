import { call, fork, put, select } from 'redux-saga/effects';
import { ContestService } from '@services';
import ContestModuleActions from './actions';
import { selectLeagueMemberData } from '@selectors/AppSelector';

export function* fetchContest(uuid: string, options?: any) {
    yield fork(fetchContestParticipant, uuid);
    const { contests: contest }: any = yield call(
        ContestService.fetchContestMaterialized,
        uuid,
        options
    );
    yield put(ContestModuleActions.setUUID(uuid));
    yield put(ContestModuleActions.set({ contest }));
}

function* fetchContestParticipant(uuid: string) {
    try {
        const leagueMember = yield select(selectLeagueMemberData);
        const { participants: participant }: any = yield call(
            ContestService.fetchContestParticipantMember,
            uuid,
            leagueMember.member
        );
        yield put(ContestModuleActions.set({ participant }));
    } catch (err) {
        console.error('Not a participant');
    }
}
