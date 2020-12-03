import { call, put } from 'redux-saga/effects';
import { keyBy as _keyBy } from 'lodash';
import { TopicSocketActions } from '@actions';
import { AccountService, ContestService, NotificationService } from '@services';
import ContestPageActions from './actions';
import { socketEventHandlers } from './utils';

export function* initContest(uuid: string) {
    const { contests: contest } = yield call(
        ContestService.fetchContestMaterialized,
        uuid
    );
    const { participants: participant } = yield call(
        ContestService.fetchContestParticipantUser,
        uuid,
        'me'
    );
    yield put(ContestPageActions.set({ contest }));
    yield put(ContestPageActions.set({ participant }));

    const { participants } = contest;

    const accounts = Object.keys(participants);

    if (accounts.length) {
        const { accounts: accountParticipants } = yield call(
            AccountService.bulkFetchAccounts,
            { within: { key: 'membership_uuid', value: accounts } },
            { include: 'avatar' }
        );
        const accountsHash = _keyBy(accountParticipants, 'membership_uuid');
        yield put(ContestPageActions.set({ accountsHash }));
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
