import { AnyAction } from 'redux';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { ContestService, NotificationService, WagerService } from '@services';
import ContestPageActions, { ContestPageTypes } from './actions';
import { ContestModuleTypes } from '@modules/Contest/actions';
import { BaseActions, SpinnerActions } from '@actions';
import { selectContest } from '@modules/Contest/selector';
import { initSubscribed } from './helpers';
import { selectLeagueUUID } from '@selectors/AppSelector';

// Action Handlers
function* init({ uuid }: AnyAction) {
    try {
        // TODO: consider updating these to be actions in the contest reducer?
        yield fork(initSubscribed, uuid);
        yield put(ContestPageActions.fetchPayout(uuid));
        yield put(ContestPageActions.initSuccess());
    } catch (err) {
        yield put(ContestPageActions.initFailure(err));
    }
}

function* terminate() {
    try {
    } catch (err) {
        console.error(err);
    }
}

function* refresh() {
    try {
        const leagueUUID = yield select(selectLeagueUUID);
        const { uuid } = yield select(selectContest);
        yield put(ContestPageActions.fetchPayout(uuid));
        yield put(BaseActions.refreshMe(leagueUUID));
        yield put(ContestPageActions.refreshSuccess());
        yield put(SpinnerActions.closeSpinner());
    } catch (err) {
        yield put(ContestPageActions.refreshFailure(err));
    }
}

function* subscribe({ uuid }: AnyAction) {
    try {
        yield call(NotificationService.subscribe, uuid);
        yield put(ContestPageActions.subscribeSuccess());
    } catch (err) {
        yield put(ContestPageActions.subscribeFailure());
    }
}

function* unsubscribe({ uuid }: AnyAction) {
    try {
        yield call(NotificationService.unsubscribe, uuid);
        yield put(ContestPageActions.unsubscribeSuccess());
    } catch (err) {
        yield put(ContestPageActions.unsubscribeFailure());
    }
}

function* updateContestParticipantStatus({ uuid, status }: AnyAction) {
    try {
        yield call(ContestService.updateContestParticipant, uuid, {
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

function* fetchPayout({ uuid }: AnyAction) {
    try {
        const { contest: payout }: any = yield call(
            WagerService.fetchContestsComplete,
            uuid
        );
        yield put(ContestPageActions.fetchPayoutSuccess(payout));
    } catch (err) {
        yield put(ContestPageActions.fetchPayoutFailure(err));
    }
}

export default function* ContestPageSaga() {
    yield all([
        takeLatest(ContestPageTypes.INIT, init),
        takeLatest(ContestPageTypes.TERMINATE, terminate),
        takeLatest(ContestPageTypes.REFRESH, refresh),
        takeLatest(ContestModuleTypes.REFRESH, refresh),
        takeLatest(ContestPageTypes.SUBSCRIBE, subscribe),
        takeLatest(ContestPageTypes.UNSUBSCRIBE, unsubscribe),
        takeLatest(
            ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_STATUS,
            updateContestParticipantStatus
        ),
        takeLatest(ContestPageTypes.FETCH_PAYOUT, fetchPayout),
    ]);
}
