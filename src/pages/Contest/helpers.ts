import { call, put } from 'redux-saga/effects';
import { keyBy as _keyBy } from 'lodash';
import { TopicSocketActions } from '@actions';
import {
    bulkFetchAccounts,
    fetchContestMaterialized,
    fetchContestParticipantUser,
    fetchScoreContest,
    subscriptionExists,
} from '@helpers';
import ContestPageActions from './actions';
import { socketEventHandlers } from './utils';

export function* initContest(uuid: string) {
    const { data: contest } = yield call(fetchContestMaterialized, uuid);
    const { data: participant } = yield call(
        fetchContestParticipantUser,
        uuid,
        'me'
    );

    yield put(ContestPageActions.set({ title: contest.name }));
    yield put(ContestPageActions.set({ contest }));
    yield put(ContestPageActions.set({ participant }));

    const { participants } = contest;

    const accounts = Object.keys(participants);

    if (accounts.length) {
        const { data: accountParticipants } = yield call(
            bulkFetchAccounts,
            accounts
        );
        const accountsHash = _keyBy(accountParticipants, 'membership_uuid');
        yield put(ContestPageActions.set({ accountsHash }));
    }
}

export function* initScore(uuid: string) {
    const { data: score } = yield call(fetchScoreContest, uuid);
    yield put(ContestPageActions.set({ score }));
}

export function* initSubscribed(uuid: string) {
    const { subscribed } = yield call(subscriptionExists, uuid);
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
