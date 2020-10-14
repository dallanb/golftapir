import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { pick as _pick, omit as _omit, isEmpty as _isEmpty } from 'lodash';
import ContestsUpdatePageActions, { ContestsUpdatePageTypes } from './actions';
import {
    assignContestAvatar,
    fetchContest,
    updateContest as updateContestHelper,
} from '@helpers';

function* init({ uuid }: AnyAction) {
    try {
        const { data } = yield call(fetchContest, uuid);

        yield put(ContestsUpdatePageActions.set({ title: data.name }));
        yield put(ContestsUpdatePageActions.set({ contest: data }));

        yield put(
            ContestsUpdatePageActions.set({
                updateFormInitialValues: {
                    name: data.name,
                    avatar: data.avatar,
                    start_time: data.start_time,
                },
            })
        );

        yield put(ContestsUpdatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestsUpdatePageActions.initFailure(err));
    }
}

function* updateContest({ uuid, data }: AnyAction) {
    try {
        const contestData = _omit(data, ['avatar']);
        if (!_isEmpty(contestData)) {
            yield call(updateContestHelper, uuid, contestData);
        }
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            yield call(assignContestAvatar, uuid, avatarData.avatar);
        }
        yield put(ContestsUpdatePageActions.updateContestSuccess({ uuid }));
    } catch (err) {
        yield put(ContestsUpdatePageActions.updateContestFailure(err));
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([
        takeLatest(ContestsUpdatePageTypes.INIT, init),
        takeLatest(ContestsUpdatePageTypes.UPDATE_CONTEST, updateContest),
    ]);
}
