import { call, put } from 'redux-saga/effects';
import { TopicSocketActions } from '@actions';
import { fetchScoreContest, subscriptionExists } from '@helpers';
import ContestPageActions from './actions';
import { socketEventHandlers } from './utils';

export function* initScore(uuid: string) {
    const { data: score } = yield call(fetchScoreContest, uuid);
    yield put(ContestPageActions.set({ score }));
}

export function* initSubscribed(uuid: string) {
    const { subscribed } = yield call(subscriptionExists, uuid);
    yield put(ContestPageActions.set({ subscribed }));
}

export function* initSocket(uuid: string) {
    yield put(
        TopicSocketActions.init({ uuid }, { eventHandler: socketEventHandlers })
    );
}
