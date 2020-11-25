import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
    selectAccountAvatarSrc,
    selectAccountName,
} from '@pages/Competitor/selector';
import CompetitorPageHeaderActions, {
    CompetitorPageHeaderTypes,
} from './actions';

function* init() {
    try {
        const name = yield select(selectAccountName);
        const src = yield select(selectAccountAvatarSrc);
        yield put(CompetitorPageHeaderActions.setTitle(name));
        yield put(CompetitorPageHeaderActions.setAvatar(src, name));
        yield put(CompetitorPageHeaderActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageHeaderActions.initFailure());
    }
}

export default function* CompetitorPageHeaderSaga() {
    yield all([takeLatest(CompetitorPageHeaderTypes.INIT, init)]);
}
