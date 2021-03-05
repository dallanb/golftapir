import { call, fork, put, select } from 'redux-saga/effects';
import { keyBy as _keyBy } from 'lodash';
import { TopicSocketActions } from '@actions';
import {
    ContestService,
    MemberService,
    NotificationService,
    WagerService,
} from '@services';
import ContestPageActions from './actions';
import { socketEventHandlers } from './utils';
import { selectLeagueMember } from '@selectors/AppSelector';
import { selectLeagueMemberData } from '@apps/LeagueApp/selector';

export function* initContest(uuid: string) {
    yield fork(initContestParticipant, uuid);
    const { contests: contest }: any = yield call(
        ContestService.fetchContestMaterialized,
        uuid
    );
    yield put(ContestPageActions.set({ contest }));

    const { participants } = contest;

    const members = Object.keys(participants);

    if (members.length) { // replace this with leagueMember from the app selector
        const { members: memberParticipants }: any = yield call(
            MemberService.bulkFetchMembers,
            { within: { key: 'uuid', value: members } },
            { include: 'avatar' }
        );
        const membersHash = _keyBy(memberParticipants, 'uuid');
        yield put(ContestPageActions.set({ membersHash }));
    }
}

function* initContestParticipant(uuid: string) {
    const leagueMember = yield select(selectLeagueMemberData);
    const { participants: participant }: any = yield call(
        ContestService.fetchContestParticipantMember,
        uuid,
        leagueMember.member
    );
    yield put(ContestPageActions.set({ participant }));
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

export function* initSocket(uuid: string) {
    yield put(
        TopicSocketActions.init({ uuid }, { eventHandler: socketEventHandlers })
    );
}

export function* terminateSocket() {
    yield put(TopicSocketActions.terminate());
}

export function* initPayout(uuid: string) {
    const { contest: payout }: any = yield call(
        WagerService.fetchContestsComplete,
        uuid
    );
    yield put(ContestPageActions.set({ payout }));
}
