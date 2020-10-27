import { AnyAction } from 'redux';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import ContestPageActions, { ContestPageTypes } from './actions';
import { initScore, initSubscribed } from './helpers';
import {
    updateContest,
    updateContestParticipant,
    subscribe as subscribeHelper,
    unsubscribe as unsubscribeHelper,
    fetchContest,
    bulkFetchAccounts,
} from '@helpers';
import { keyBy as _keyBy } from 'lodash';

// Action Handlers
function* init({ uuid }: AnyAction) {
    try {
        yield fork(initScore, uuid);
        yield fork(initSubscribed, uuid);

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
        yield put(ContestPageActions.initSuccess());
    } catch (err) {
        yield put(ContestPageActions.initFailure(err));
    }
}

function* updateContestStatus({ uuid, status }: AnyAction) {
    try {
        yield call(updateContest, uuid, {
            status,
        });
        yield put(ContestPageActions.updateContestStatusSuccess(status));
    } catch (err) {
        yield put(ContestPageActions.updateContestStatusFailure());
    }
}

function* updateContestParticipantStatus({ uuid, status }: AnyAction) {
    try {
        yield call(updateContestParticipant, uuid, {
            status,
        });
        yield put(
            ContestPageActions.updateContestParticipantStatusSuccess(
                uuid,
                status
            )
        );
    } catch (err) {
        yield put(
            ContestPageActions.updateContestParticipantStatusFailure(err)
        );
    }
}

function* subscribe({ uuid }: AnyAction) {
    try {
        yield call(subscribeHelper, uuid);
        yield put(ContestPageActions.subscribeSuccess());
    } catch (err) {
        yield put(ContestPageActions.subscribeFailure());
    }
}
function* unsubscribe({ uuid }: AnyAction) {
    try {
        yield call(unsubscribeHelper, uuid);
        yield put(ContestPageActions.unsubscribeSuccess());
    } catch (err) {
        yield put(ContestPageActions.unsubscribeFailure());
    }
}

export default function* ContestPageSaga() {
    yield all([
        takeLatest(ContestPageTypes.INIT, init),
        takeLatest(ContestPageTypes.UPDATE_CONTEST_STATUS, updateContestStatus),
        takeLatest(
            ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_STATUS,
            updateContestParticipantStatus
        ),
        takeLatest(ContestPageTypes.SUBSCRIBE, subscribe),
        takeLatest(ContestPageTypes.UNSUBSCRIBE, unsubscribe),
    ]);
}
