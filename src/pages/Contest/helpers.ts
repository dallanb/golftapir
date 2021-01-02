import { call, put } from 'redux-saga/effects';
import { keyBy as _keyBy } from 'lodash';
import { TopicSocketActions } from '@actions';
import {
    AccountService,
    ContestService,
    MemberService,
    NotificationService,
} from '@services';
import ContestPageActions from './actions';
import { socketEventHandlers } from './utils';

export function* initContest(uuid: string) {
    const { contests: contest } = yield call(
        ContestService.fetchContestMaterialized,
        uuid
    );
    const { participants: participant } = yield call(
        ContestService.fetchContestParticipantMember,
        uuid,
        'me' // TODO: fix this
    );
    yield put(ContestPageActions.set({ contest }));
    yield put(ContestPageActions.set({ participant }));

    const { participants } = contest;

    const members = Object.keys(participants);

    if (members.length) {
        const { members: memberParticipants } = yield call(
            MemberService.bulkFetchMembers,
            { within: { key: 'uuid', value: members } },
            { include: 'avatar,address' }
        );
        const membersHash = _keyBy(memberParticipants, 'uuid');
        yield put(ContestPageActions.set({ membersHash }));
    }
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
