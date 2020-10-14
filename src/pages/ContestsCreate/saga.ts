import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import config from 'config';
import ContestsCreatePageActions, { ContestsCreatePageTypes } from './actions';
import { selectMe } from '@selectors/BaseSelector';
import { searchAccounts } from '@helpers';

function* init() {
    try {
        const me = yield select(selectMe);
        const createFormInitialValues = {
            owner_uuid: me.membership_uuid,
            sport_uuid: config.GOLF_UUID,
            participants: [me.membership_uuid],
        };
        yield put(ContestsCreatePageActions.set({ createFormInitialValues }));
        yield put(ContestsCreatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestsCreatePageActions.initFailure(err));
    }
}

function* searchParticipants({ key }: AnyAction) {
    try {
        const { data } = yield call(searchAccounts, key);
        yield put(ContestsCreatePageActions.searchParticipantsSuccess(data));
    } catch (err) {
        yield put(ContestsCreatePageActions.searchParticipantsFailure(err));
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([
        takeLatest(ContestsCreatePageTypes.INIT, init),
        takeLatest(
            ContestsCreatePageTypes.SEARCH_PARTICIPANTS,
            searchParticipants
        ),
    ]);
}
