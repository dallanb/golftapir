import { call, put } from 'redux-saga/effects';
import ContestPageActions from './actions';
import { fetchScoreContest, subscriptionExists } from '@helpers';

export function* initScore(uuid: string) {
    const { data: score } = yield call(fetchScoreContest, uuid);
    yield put(ContestPageActions.set({ score }));
}

export function* initSubscribed(uuid: string) {
    const { subscribed } = yield call(subscriptionExists, uuid);
    yield put(ContestPageActions.set({ subscribed }));
}
