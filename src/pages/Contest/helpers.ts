import { call, put, select } from 'redux-saga/effects';
import { keyBy as _keyBy } from 'lodash';
import { TopicSocketActions } from '@actions';
import { ContestService, MemberService, NotificationService } from '@services';
import ContestPageActions from './actions';
import { socketEventHandlers } from './utils';
import { selectMe } from '@selectors/BaseSelector';

export function* initContest(uuid: string) {
    const me = yield select(selectMe);
    const { contests: contest } = yield call(
        ContestService.fetchContestMaterialized,
        uuid
    );
    const { participants: participant } = yield call(
        ContestService.fetchContestParticipantMember,
        uuid,
        me.uuid
    );
    yield put(ContestPageActions.set({ contest }));
    yield put(ContestPageActions.set({ participant }));

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
