import { AnyAction } from 'redux';
import {
    all,
    call,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import ContestPageActions, { ContestPageTypes } from './actions';
import AccountActions, { AccountTypes } from '@actions/AccountActions';
import ContestActions, { ContestTypes } from '@actions/ContestActions';
import CONSTANTS from '@locale/en-CA';
import { normalizeContestParticipants } from '@pages/Contest/utils';

// Action Handlers
function* init({ uuid }: AnyAction) {
    try {
        const {
            data: { participants, name: title },
        } = yield call(fetchContest, uuid);

        yield put(ContestPageActions.set({ title }));

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
            const contestParticipants = normalizeContestParticipants(
                participants,
                accountParticipants
            );
            yield put(ContestPageActions.set({ contestParticipants }));
        }

        yield put(ContestPageActions.initSuccess());
    } catch (err) {
        yield put(ContestPageActions.initFailure(err));
    }
}

// Helpers
function* fetchContest(uuid: string) {
    yield put(
        ContestActions.fetchContest(uuid, {
            include: 'participants',
        })
    );
    const { success, failure } = yield race({
        success: take(ContestTypes.FETCH_CONTEST_SUCCESS),
        failure: take(ContestTypes.FETCH_CONTEST_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }

    return success;
}

function* bulkFetchAccounts(accounts: string[]) {
    yield put(
        AccountActions.bulkFetchAccounts(
            { key: 'membership_uuid', value: accounts },
            {
                include: 'avatar',
            }
        )
    );
    const { success, failure } = yield race({
        success: take(AccountTypes.BULK_FETCH_ACCOUNTS_SUCCESS),
        failure: take(AccountTypes.BULK_FETCH_ACCOUNTS_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }

    return success;
}

export default function* ContestPageSaga() {
    yield all([takeLatest(ContestPageTypes.INIT, init)]);
}
