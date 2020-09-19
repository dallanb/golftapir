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
import config from 'config';
import ContestsCreatePageActions, { ContestsCreatePageTypes } from './actions';
import { selectMe } from '@selectors/BaseSelector';
import { AccountActions, AccountTypes } from '@actions';

// Action Handlers
function* init() {
    try {
        const me = yield select(selectMe);
        const createFormInitialValues = {
            owner_uuid: me.membership_uuid,
            sport_uuid: config.GOLF_UUID,
            participants: [me.membership_uuid],
        };
        yield put(ContestsCreatePageActions.set({ createFormInitialValues }));
        yield put(ContestsCreatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestsCreatePageActions.initFailure(err));
    }
}
function* searchParticipants({ key }: AnyAction) {
    try {
        const { data } = yield call(searchAccounts, key);
        yield put(ContestsCreatePageActions.searchParticipantsSuccess(data));
    } catch (err) {
        yield put(ContestsCreatePageActions.searchParticipantsFailure(err));
    }
}

// Helpers
function* searchAccounts(key: string): any {
    yield put(AccountActions.searchAccounts(key));
    const { success, failure } = yield race({
        success: take(AccountTypes.SEARCH_ACCOUNTS_SUCCESS),
        failure: take(AccountTypes.SEARCH_ACCOUNTS_FAILURE),
    });

    if (failure) {
        throw new Error('Unable to fetch accounts');
    }

    return success;
}

export default function* ContestsCreatePageSaga() {
    yield all([
        takeLatest(ContestsCreatePageTypes.INIT, init),
        takeLatest(
            ContestsCreatePageTypes.SEARCH_PARTICIPANTS,
            searchParticipants
        ),
    ]);
}
