import { call, put, select } from 'redux-saga/effects';
import { keyBy as _keyBy } from 'lodash';
import ContestPageActions from './actions';
import {
    bulkFetchAccounts,
    fetchContest,
    fetchScoreContest,
    subscriptionExists,
} from '@helpers';

export function* initScore(uuid: string) {
    const { data: score } = yield call(fetchScoreContest, uuid);

    yield put(ContestPageActions.set({ score }));
}

export function* initSubscribed(uuid: string) {
    const { subscribed } = yield call(subscriptionExists, uuid);
    yield put(ContestPageActions.set({ subscribed }));
}

export function* initContest(uuid: string) {
    const { data: contest } = yield call(fetchContest, uuid);

    yield put(ContestPageActions.set({ contest }));

    const { participants } = contest;

    const accounts = participants.map(
        ({ user_uuid }: { user_uuid: string }) => user_uuid
    );
    if (accounts.length) {
        const { data: accountParticipants } = yield call(
            bulkFetchAccounts,
            accounts
        );

        const accountsHash = _keyBy(accountParticipants, 'membership_uuid');
        yield put(ContestPageActions.set({ accountsHash }));
    }
}
