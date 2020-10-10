import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import WagerActions, { WagerTypes } from '@actions/WagerActions';
import { WagerService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* fetchWager({ uuid, options }: AnyAction) {
    try {
        const res = yield call(WagerService.fetchWager, uuid, options);
        const { wagers, _metadata: metadata } = res;
        yield put(WagerActions.fetchWagerSuccess(wagers, metadata));
    } catch (err) {
        yield put(WagerActions.fetchWagerFailure(err));
        message.error(CONSTANTS.WAGER.ERROR.FETCH);
    }
}
function* fetchWagers({ options }: AnyAction) {
    try {
        const res = yield call(WagerService.fetchWagers, options);
        const { wagers, _metadata: metadata } = res;
        yield put(WagerActions.fetchWagersSuccess(wagers, metadata));
    } catch (err) {
        yield put(WagerActions.fetchWagersFailure(err));
        message.error(CONSTANTS.WAGER.ERROR.FETCH);
    }
}

export default function* WagerSaga() {
    yield all([
        takeLatest(WagerTypes.FETCH_WAGER, fetchWager),
        takeLatest(WagerTypes.FETCH_WAGERS, fetchWagers),
    ]);
}
