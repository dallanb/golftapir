import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import ContestPageActions, { ContestPageTypes } from './actions';
import { AccountActions } from '@actions';
import { normalizeContestParticipants } from '@pages/Contest/utils';
import { selectMe } from '@selectors/BaseSelector';
import { bulkFetchAccounts, fetchContest, subscriptionExists } from '@helpers';

// Action Handlers
function* init({ uuid }: AnyAction) {
    try {
        const {
            data: { participants, name: title, status, owner_uuid },
        } = yield call(fetchContest, uuid);

        yield put(ContestPageActions.set({ title }));
        yield put(ContestPageActions.set({ status }));
        yield put(ContestPageActions.set({ owner_uuid }));

        const { subscribed } = yield call(subscriptionExists, uuid);
        yield put(ContestPageActions.set({ subscribed }));

        const accounts = participants.map(
            ({ user_uuid }: { user_uuid: string }) => user_uuid
        );
        if (!accounts.length) {
            yield put(AccountActions.bulkFetchAccountsSuccess([]));
        } else {
            const { data: accountParticipants } = yield call(
                bulkFetchAccounts,
                accounts
            );

            const me = yield select(selectMe);

            const contestParticipants = normalizeContestParticipants(
                participants,
                accountParticipants,
                me
            );
            yield put(ContestPageActions.set({ contestParticipants }));
        }

        yield put(ContestPageActions.initSuccess());
    } catch (err) {
        yield put(ContestPageActions.initFailure(err));
    }
}

export default function* ContestPageSaga() {
    yield all([takeLatest(ContestPageTypes.INIT, init)]);
}
