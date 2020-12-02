import { AnyAction } from 'redux';
import {
    all,
    call,
    fork,
    put,
    race,
    select,
    takeLatest,
} from 'redux-saga/effects';
import ContestPageActions, { ContestPageTypes } from '@pages/Contest/actions';
import ContestPageSiderContentParticipantActiveContestPendingActions, {
    ContestPageSiderContentParticipantActiveContestPendingTypes,
} from './actions';
import { fetchContestParticipants } from '@helpers';
import {
    selectContestStatus,
    selectContestUUID,
} from '@pages/Contest/selector';
import constants from '@constants';
import { keyBy as _keyBy } from 'lodash';
import { fetchPendingParticipants } from './helpers';
import { AccountService } from '@services';

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

function* refresh() {
    try {
        yield call(fetchPendingParticipants);
        yield put(
            ContestPageSiderContentParticipantActiveContestPendingActions.refreshSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageSiderContentParticipantActiveContestPendingActions.refreshFailure(
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
            const { accounts: accountParticipants } = yield call(
                AccountService.bulkFetchAccounts,
                { within: { key: 'membership_uuid', value: accounts } },
                { include: 'avatar' }
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

function* basePageRefresh() {
    const { success } = yield race({
        success: ContestPageTypes.REFRESH_SUCCESS,
        failure: ContestPageTypes.REFRESH_FAILURE,
    });
    if (success) {
        const status = yield select(selectContestStatus);
        if (status === constants.STATUS.PENDING.KEY)
            yield put(
                ContestPageSiderContentParticipantActiveContestPendingActions.refresh()
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
            ContestPageSiderContentParticipantActiveContestPendingTypes.REFRESH,
            refresh
        ),
        takeLatest(
            ContestPageSiderContentParticipantActiveContestPendingTypes.FETCH_DATA,
            fetchData
        ),
        takeLatest(ContestPageTypes.REFRESH, basePageRefresh),
    ]);
}
