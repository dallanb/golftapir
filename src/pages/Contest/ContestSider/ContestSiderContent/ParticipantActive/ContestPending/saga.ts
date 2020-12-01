import { AnyAction } from 'redux';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import ContestPageSiderContentParticipantActiveContestPendingActions, {
    ContestPageSiderContentParticipantActiveContestPendingTypes,
} from './actions';
import { bulkFetchAccounts, fetchContestParticipants } from '@helpers';
import { selectContestUUID } from '@pages/Contest/selector';
import constants from '@constants';
import { keyBy as _keyBy } from 'lodash';
import { fetchPendingParticipants } from './helpers';

function* init() {
    try {
        yield call(fetchPendingParticipants);
        yield put(
            ContestPageSiderContentParticipantActiveContestPendingActions.initSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageSiderContentParticipantActiveContestPendingActions.initFailure(
                err
            )
        );
    }
}

function* fetchData({ options = { page: 1, per_page: 10 } }: AnyAction) {
    try {
        const uuid = yield select(selectContestUUID);
        const { data, metadata } = yield call(fetchContestParticipants, uuid, {
            ...options,
            status: constants.STATUS.PENDING.KEY,
        });

        // fetch account mappings from the account api
        const accounts = data.map(
            ({ user_uuid }: { user_uuid: string }) => user_uuid
        );
        if (accounts.length) {
            const { data: accountParticipants } = yield call(
                bulkFetchAccounts,
                accounts
            );
            const accountsHash = _keyBy(accountParticipants, 'membership_uuid');
            yield put(
                ContestPageSiderContentParticipantActiveContestPendingActions.set(
                    { accountsHash }
                )
            );
        }
        yield put(
            ContestPageSiderContentParticipantActiveContestPendingActions.fetchDataSuccess(
                data,
                metadata
            )
        );
    } catch (err) {
        yield put(
            ContestPageSiderContentParticipantActiveContestPendingActions.fetchDataFailure(
                err
            )
        );
    }
}

export default function* ContestPageSiderContentParticipantActiveContestPendingSaga() {
    yield all([
        takeLatest(
            ContestPageSiderContentParticipantActiveContestPendingTypes.INIT,
            init
        ),
        takeLatest(
            ContestPageSiderContentParticipantActiveContestPendingTypes.FETCH_DATA,
            fetchData
        ),
    ]);
}
