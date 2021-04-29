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
import { AccountService, ContestService, MemberService } from '@services';
import ContestPageActions, { ContestPageTypes } from '@pages/Contest/actions';
import ContestPageSiderParticipantActiveContestPendingActions, {
    ContestPageSiderParticipantActiveContestPendingTypes,
} from './actions';
import {
    selectContestStatus,
    selectContestUUID,
} from '@modules/Contest/selector';
import constants from '@constants';
import { keyBy as _keyBy } from 'lodash';
import { fetchPendingParticipants } from './helpers';

function* init() {
    try {
        yield call(fetchPendingParticipants);
        yield put(
            ContestPageSiderParticipantActiveContestPendingActions.initSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageSiderParticipantActiveContestPendingActions.initFailure(
                err
            )
        );
    }
}

function* refresh() {
    try {
        yield call(fetchPendingParticipants);
        yield put(
            ContestPageSiderParticipantActiveContestPendingActions.refreshSuccess()
        );
    } catch (err) {
        yield put(
            ContestPageSiderParticipantActiveContestPendingActions.refreshFailure(
                err
            )
        );
    }
}

function* fetchData({ options = { page: 1, per_page: 10 } }: AnyAction) {
    try {
        const uuid = yield select(selectContestUUID);
        const { participants, metadata }: any = yield call(
            ContestService.fetchContestParticipants,
            uuid,
            {
                ...options,
                status: constants.STATUS.PENDING.KEY,
            }
        );
        yield put(
            ContestPageSiderParticipantActiveContestPendingActions.fetchDataSuccess(
                participants,
                metadata
            )
        );
    } catch (err) {
        yield put(
            ContestPageSiderParticipantActiveContestPendingActions.fetchDataFailure(
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
                ContestPageSiderParticipantActiveContestPendingActions.refresh()
            );
    }
}

export default function* ContestPageSiderParticipantActiveContestPendingSaga() {
    yield all([
        takeLatest(
            ContestPageSiderParticipantActiveContestPendingTypes.INIT,
            init
        ),
        takeLatest(
            ContestPageSiderParticipantActiveContestPendingTypes.REFRESH,
            refresh
        ),
        takeLatest(
            ContestPageSiderParticipantActiveContestPendingTypes.FETCH_DATA,
            fetchData
        ),
        takeLatest(ContestPageTypes.REFRESH, basePageRefresh),
    ]);
}
