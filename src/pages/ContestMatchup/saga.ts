import { AnyAction } from 'redux';
import { all, call, put, race, take, takeLatest } from 'redux-saga/effects';
import ContestMatchupPageActions, { ContestMatchupPageTypes } from './actions';
import {
    bulkFetchAccounts,
    fetchScoreContest,
    updateScore,
    updateScoreSheet,
} from '@helpers';

function* init({ contest }: AnyAction) {
    try {
        const { uuid, name: title } = contest;

        yield put(ContestMatchupPageActions.set({ title }));
        yield put(ContestMatchupPageActions.set({ contest }));

        // for now we will be fetching score back to back
        const { data: score } = yield call(fetchScoreContest, uuid);

        yield put(ContestMatchupPageActions.set({ score }));

        const accounts = score.sheet.map(
            ({ participant }: { participant: string }) => participant
        );
        const { data: participants } = yield call(bulkFetchAccounts, accounts);
        yield put(ContestMatchupPageActions.set({ participants }));

        yield put(ContestMatchupPageActions.initSuccess());
    } catch (err) {
        yield put(ContestMatchupPageActions.initFailure(err));
    }
}

function* updateScoreStatus({ uuid, status }: AnyAction) {
    try {
        yield call(updateScore, uuid, { status });
        yield put(ContestMatchupPageActions.updateScoreStatusSuccess(status));
    } catch (err) {
        yield put(ContestMatchupPageActions.updateScoreStatusFailure(err));
    }
}

function* updateScoreSheetStatus({ uuid, status }: AnyAction) {
    try {
        yield call(updateScoreSheet, uuid, { status });
        yield put(
            ContestMatchupPageActions.updateScoreSheetStatusSuccess(status)
        );
    } catch (err) {
        yield put(ContestMatchupPageActions.updateScoreSheetStatusFailure(err));
    }
}

export default function* ContestMatchupPageSaga() {
    yield all([
        takeLatest(ContestMatchupPageTypes.INIT, init),
        takeLatest(
            ContestMatchupPageTypes.UPDATE_SCORE_STATUS,
            updateScoreStatus
        ),
        takeLatest(
            ContestMatchupPageTypes.UPDATE_SCORE_SHEET_STATUS,
            updateScoreSheetStatus
        ),
    ]);
}
