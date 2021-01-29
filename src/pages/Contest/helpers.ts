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
import { selectMe } from '@selectors/BaseSelector';

export function* initContest(uuid: string) {
    yield fork(initContestParticipant, uuid);
    const { contests: contest } = yield call(
        ContestService.fetchContestMaterialized,
        uuid
    );
    yield put(ContestPageActions.set({ contest }));

    const { participants } = contest;

    const members = Object.keys(participants);

    if (members.length) {
        const { members: memberParticipants } = yield call(
            MemberService.bulkFetchMembers,
            { within: { key: 'uuid', value: members } },
            { include: 'avatar' }
        );
        const membersHash = _keyBy(memberParticipants, 'uuid');
        yield put(ContestPageActions.set({ membersHash }));
    }
}

function* initContestParticipant(uuid: string) {
    const { data } = yield select(selectMe);
    const { participants: participant } = yield call(
        ContestService.fetchContestParticipantMember,
        uuid,
        data.uuid
    );
    yield put(ContestPageActions.set({ participant }));
}

export function* initSubscribed(uuid: string) {
    const { subscribed } = yield call(NotificationService.subscriptionExists, {
        uuid,
    });
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
    const { contest: payout } = yield call(
        WagerService.fetchContestsComplete,
        uuid
    );
    yield put(ContestPageActions.set({ payout }));
}
