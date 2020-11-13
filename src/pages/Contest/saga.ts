import { AnyAction } from 'redux';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import ContestPageActions, { ContestPageTypes } from './actions';
import { selectContest } from './selector';
import {
    initContest,
    initSocket,
    initSubscribed,
    terminateSocket,
} from './helpers';
import {
    updateContest,
    updateContestParticipant,
    subscribe as subscribeHelper,
    unsubscribe as unsubscribeHelper,
} from '@helpers';

// Action Handlers
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

function* updateContestStatus({ uuid, status }: AnyAction) {
    try {
        yield call(updateContest, uuid, {
            status,
        });
        yield put(ContestPageActions.updateContestStatusSuccess(status));
    } catch (err) {
        yield put(ContestPageActions.updateContestStatusFailure());
    }
}

function* updateContestParticipantStatus({ uuid, status }: AnyAction) {
    try {
        yield call(updateContestParticipant, uuid, {
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

function* subscribe({ uuid }: AnyAction) {
    try {
        yield call(subscribeHelper, uuid);
        yield put(ContestPageActions.subscribeSuccess());
    } catch (err) {
        yield put(ContestPageActions.subscribeFailure());
    }
}

function* unsubscribe({ uuid }: AnyAction) {
    try {
        yield call(unsubscribeHelper, uuid);
        yield put(ContestPageActions.unsubscribeSuccess());
    } catch (err) {
        yield put(ContestPageActions.unsubscribeFailure());
    }
}

export default function* ContestPageSaga() {
    yield all([
        takeLatest(ContestPageTypes.INIT, init),
        takeLatest(ContestPageTypes.TERMINATE, terminate),
        takeLatest(ContestPageTypes.REFRESH, refresh),
        takeLatest(ContestPageTypes.UPDATE_CONTEST_STATUS, updateContestStatus),
        takeLatest(
            ContestPageTypes.UPDATE_CONTEST_PARTICIPANT_STATUS,
            updateContestParticipantStatus
        ),
        takeLatest(ContestPageTypes.SUBSCRIBE, subscribe),
        takeLatest(ContestPageTypes.UNSUBSCRIBE, unsubscribe),
    ]);
}
