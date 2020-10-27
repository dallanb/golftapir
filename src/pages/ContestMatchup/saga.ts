import { AnyAction } from 'redux';
import { all, call, put, race, take, takeLatest } from 'redux-saga/effects';
import ContestMatchupPageActions, { ContestMatchupPageTypes } from './actions';
import { bulkFetchAccounts, fetchScoreContest } from '@helpers';

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

export default function* ContestMatchupPageSaga() {
    yield all([takeLatest(ContestMatchupPageTypes.INIT, init)]);
}
