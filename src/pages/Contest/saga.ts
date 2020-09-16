import { AnyAction } from 'redux';
import { all, put, race, select, take, takeLatest } from 'redux-saga/effects';
import ContestPageActions, { ContestPageTypes } from '@pages/Contest/reducer';
import AccountActions, { AccountTypes } from '@reducers/AccountReducer';
import ContestActions, { ContestTypes } from '@reducers/ContestReducer';
import { selectContestData } from './selector';
import { withTarget } from '@utils';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';

const target = constants.TARGETS.CONTEST_PAGE;

function* init({ uuid }: AnyAction) {
    try {
        yield put(
            withTarget(ContestActions.fetchContest, target)(uuid, {
                include: 'participants',
            })
        );
        const { failure } = yield race({
            success: take(ContestTypes.FETCH_CONTEST_SUCCESS),
            failure: take(ContestTypes.FETCH_CONTEST_FAILURE),
        });

        if (failure) {
            throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
        }

        const { participants = [] } = yield select(selectContestData);
        const accounts = participants.map(
            ({ user_uuid }: { user_uuid: string }) => user_uuid
        );
        if (!accounts.length) {
            yield put(
                withTarget(AccountActions.bulkFetchAccountsSuccess, target)([])
            );
        } else {
            yield put(
                withTarget(AccountActions.bulkFetchAccounts, target)(accounts, {
                    include: 'avatar',
                })
            );
            const { failure } = yield race({
                success: take(AccountTypes.BULK_FETCH_ACCOUNTS_SUCCESS),
                failure: take(AccountTypes.BULK_FETCH_ACCOUNTS_FAILURE),
            });
            if (failure) {
                throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
            }
        }

        yield put(ContestPageActions.initSuccess());
    } catch (err) {
        yield put(ContestPageActions.initFailure(err));
    }
}

export default function* ContestPageSaga() {
    yield all([takeLatest(ContestPageTypes.INIT, init)]);
}
