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
import ContestPageSiderContentParticipantActiveContestPendingActions, {
    ContestPageSiderContentParticipantActiveContestPendingTypes,
} from './actions';
import {
    selectContestStatus,
    selectContestUUID,
} from '@pages/Contest/selector';
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
        const uuid: any = yield select(selectContestUUID);
        const { participants, metadata }: any = yield call(
            ContestService.fetchContestParticipants,
            uuid,
            {
                ...options,
                status: constants.STATUS.PENDING.KEY,
            }
        );

        // fetch account mappings from the account api
        const members = participants.map(
            ({ member_uuid }: { member_uuid: string }) => member_uuid
        );
        if (members.length) {
            const { members: memberParticipants }: any = yield call(
                MemberService.bulkFetchMembers,
                {
                    within: { key: 'uuid', value: members },
                }
            );
            const membersHash = _keyBy(memberParticipants, 'uuid');
            yield put(
                ContestPageSiderContentParticipantActiveContestPendingActions.set(
                    { membersHash }
                )
            );
        }
        yield put(
            ContestPageSiderContentParticipantActiveContestPendingActions.fetchDataSuccess(
                participants,
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
        const status: any = yield select(selectContestStatus);
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
