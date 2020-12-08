import { AnyAction } from 'redux';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { ContestService, NotificationService } from '@services';
import ContestPageActions, { ContestPageTypes } from './actions';
import { selectContest } from './selector';
import {
    initContest,
    initSocket,
    initSubscribed,
    terminateSocket,
} from './helpers';

// Action Handlers
function* preInit({ data: contest }: AnyAction) {
    yield put(ContestPageActions.set({ contest }));
}

function* init({ uuid }: AnyAction) {
    try {
        yield fork(initSocket, uuid);
        yield fork(initSubscribed, uuid);
        yield call(initContest, uuid);
        yield put(ContestPageActions.initSuccess());
    } catch (err) {
        yield put(ContestPageActions.initFailure(err));
    }
}

function* terminate() {
    try {
        yield call(terminateSocket);
    } catch (err) {
        console.error(err);
    }
}

function* refresh() {
    try {
        const { uuid } = yield select(selectContest);
        yield call(initContest, uuid);
        yield put(ContestPageActions.refreshSuccess());
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

export default function* ContestPageSaga() {
    yield all([
        takeLatest(ContestPageTypes.PRE_INIT, preInit),
        takeLatest(ContestPageTypes.INIT, init),
        takeLatest(ContestPageTypes.TERMINATE, terminate),
        takeLatest(ContestPageTypes.REFRESH, refresh),
        takeLatest(ContestPageTypes.SUBSCRIBE, subscribe),
        takeLatest(ContestPageTypes.UNSUBSCRIBE, unsubscribe),
        takeLatest(
            ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_STATUS,
            updateContestParticipantStatus
        ),
    ]);
}
