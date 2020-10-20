import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { pick as _pick, omit as _omit, isEmpty as _isEmpty } from 'lodash';
import ContestUpdatePageActions, { ContestUpdatePageTypes } from './actions';
import {
    assignContestAvatar,
    updateContest as updateContestHelper,
} from '@helpers';

function* init({ contest }: AnyAction) {
    try {
        yield put(ContestUpdatePageActions.set({ title: contest.name }));

        yield put(
            ContestUpdatePageActions.set({
                updateFormInitialValues: {
                    name: contest.name,
                    avatar: contest.avatar,
                    start_time: contest.start_time,
                },
            })
        );

        yield put(ContestUpdatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestUpdatePageActions.initFailure(err));
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
        yield put(ContestUpdatePageActions.updateContestSuccess({ uuid }));
    } catch (err) {
        yield put(ContestUpdatePageActions.updateContestFailure(err));
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([
        takeLatest(ContestUpdatePageTypes.INIT, init),
        takeLatest(ContestUpdatePageTypes.UPDATE_CONTEST, updateContest),
    ]);
}
