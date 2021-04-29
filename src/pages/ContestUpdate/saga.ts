import { AnyAction } from 'redux';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import ContestUpdatePageActions, { ContestUpdatePageTypes } from './actions';
import { ContestService } from '@services';

// Action Handlers
function* init({ uuid }: AnyAction) {
    try {
        // yield fork(initSocket, uuid);
        // force call for now since we need avatar information
        const { contests: contest }: any = yield call(
            ContestService.fetchContest,
            uuid,
            {
                include: 'avatar',
            }
        );
        yield put(ContestUpdatePageActions.set({ contest }));
        yield put(ContestUpdatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestUpdatePageActions.initFailure(err));
    }
}

function* terminate() {
    try {
        // yield call(terminateSocket);
    } catch (err) {
        console.error(err);
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([
        takeLatest(ContestUpdatePageTypes.INIT, init),
        takeLatest(ContestUpdatePageTypes.TERMINATE, terminate),
    ]);
}
