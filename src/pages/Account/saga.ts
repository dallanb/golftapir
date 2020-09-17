import { all, put, race, select, take, takeLatest } from 'redux-saga/effects';
import { AccountActions, ContestTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';
import AccountPageActions, { AccountPageTypes } from './actions';
import { selectData } from '@selectors/AuthSelectors';
import { prepareInitialValues } from '@pages/Account/utils';

function* init() {
    try {
        yield put(
            AccountActions.fetchAccount('me', {
                include: 'phone,address,avatar',
            })
        );
        const { success, failure } = yield race({
            success: take(ContestTypes.FETCH_ACCOUNT_SUCCESS),
            failure: take(ContestTypes.FETCH_ACCOUNT_FAILURE),
        });

        if (failure) {
            throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
        }

        const { data } = success;
        const authData = yield select(selectData);
        const updateFormInitialValues = prepareInitialValues(data, authData);

        yield put(AccountPageActions.set({ data, updateFormInitialValues }));

        yield put(AccountPageActions.initSuccess());
    } catch (err) {
        yield put(AccountPageActions.initFailure(err));
    }
}

export default function* AccountPageSaga() {
    yield all([takeLatest(AccountPageTypes.INIT, init)]);
}
