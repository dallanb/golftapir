import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { selectMe } from '@selectors/BaseSelector';
import CompetitorPageSiderHeaderActions, {
    CompetitorPageSiderHeaderTypes,
} from './actions';

function* init() {
    try {
        const me = yield select(selectMe);
        yield put(CompetitorPageSiderHeaderActions.setTitle(me));
        yield put(CompetitorPageSiderHeaderActions.setAvatar(me));
        yield put(CompetitorPageSiderHeaderActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageSiderHeaderActions.initFailure());
    }
}

export default function* CompetitorPageSiderHeaderSaga() {
    yield all([takeLatest(CompetitorPageSiderHeaderTypes.INIT, init)]);
}
