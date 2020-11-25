import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { selectAccount } from '@pages/Competitor/selector';
import CompetitorPageHeaderActions, {
    CompetitorPageHeaderTypes,
} from './actions';

function* init() {
    try {
        const account = yield select(selectAccount);
        yield put(CompetitorPageHeaderActions.setTitle(account));
        yield put(CompetitorPageHeaderActions.setAvatar(account));
        yield put(CompetitorPageHeaderActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageHeaderActions.initFailure());
    }
}

export default function* CompetitorPageHeaderSaga() {
    yield all([takeLatest(CompetitorPageHeaderTypes.INIT, init)]);
}
