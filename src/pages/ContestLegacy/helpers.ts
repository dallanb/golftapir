import { call, fork, put, select } from 'redux-saga/effects';
import { keyBy as _keyBy } from 'lodash';
import { TopicSocketActions } from '@actions';
import {
    bulkFetchAccounts,
    fetchContestMaterialized,
    fetchContestParticipants,
    fetchContestParticipantUser,
    fetchMyScoreContestParticipantSheet,
    subscriptionExists,
} from '@helpers';
import ContestPageActions from './actions';
import { socketEventHandlers } from './utils';
import constants from '@constants';
import { selectAccountsHash } from '@pages/Contest/selector';

export function* initContest(uuid: string) {
    const { data: contest } = yield call(fetchContestMaterialized, uuid);
    const { data: participants } = yield call(fetchContestParticipants, uuid);

    yield put(ContestPageActions.set({ title: contest.name }));
    yield put(ContestPageActions.set({ contest }));
    yield put(ContestPageActions.set({ participants }));

    yield fork(fetchAccountsHash, participants);

    const { status } = contest;
    if (status === constants.STATUS.ACTIVE.KEY) {
        yield fork(initSheet, uuid);
    }
}

export function* initSheet(uuid: string) {
    const { data: sheet } = yield call(
        fetchMyScoreContestParticipantSheet,
        uuid,
        'me'
    );
    yield put(ContestPageActions.set({ sheet }));
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

export function* fetchAccountsHash(participants: any[]) {
    const accounts = participants.map(
        ({ user_uuid }: { user_uuid: string }) => user_uuid
    );
    if (accounts.length) {
        const { data: accountParticipants } = yield call(
            bulkFetchAccounts,
            accounts
        );
        const newAccountsHash = _keyBy(accountParticipants, 'membership_uuid');
        const prevAccountsHash = yield select(selectAccountsHash);

        const accountsHash = Object.assign(
            {},
            prevAccountsHash,
            newAccountsHash
        );
        yield put(ContestPageActions.set({ accountsHash }));
    }
}

export function* terminateSocket() {
    yield put(TopicSocketActions.terminate());
}
