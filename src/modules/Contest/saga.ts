import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import ContestModuleActions, { ContestModuleTypes } from './actions';
import { BaseActions } from '@actions';
import { get as _get } from 'lodash';
import { fetchContest } from './helpers';

// Action Handlers
function* preInit({ data }: AnyAction) {
    const contest = _get(data, ['contest'], undefined);
    const participant = _get(data, ['participant'], undefined);
    if (contest) {
        yield put(ContestModuleActions.set({ contest }));
    }
    if (participant) {
        yield put(ContestModuleActions.set({ participant }));
    }
}

function* init({ uuid }: AnyAction) {
    try {
        yield call(fetchContest, uuid);
        yield put(ContestModuleActions.initSuccess());
    } catch (err) {
        yield put(ContestModuleActions.initFailure(err));
    }
}

function* terminate() {
    try {
        yield put(ContestModuleActions.terminateSuccess());
    } catch (err) {
        console.error(err);
        yield put(ContestModuleActions.terminateFailure(err));
    }
}

function* refresh({ uuid }: AnyAction) {
    try {
        yield call(fetchContest, uuid);
        yield put(ContestModuleActions.refreshSuccess());
    } catch (err) {
        yield put(ContestModuleActions.refreshFailure());
    }
}

function* updateContestName({ data }: AnyAction) {
    try {
        yield put(ContestModuleActions.updateContestNameSuccess(data.name));
    } catch (err) {
        yield put(ContestModuleActions.updateContestNameFailure(err));
    }
}

function* updateContestAvatar({ data }: AnyAction) {
    try {
        const avatar =
            data.avatar && `${data.avatar}?t=${new Date().getTime()}`;
        yield put(ContestModuleActions.updateContestAvatarSuccess(avatar));
    } catch (err) {
        yield put(ContestModuleActions.updateContestAvatarFailure(err));
    }
}

function* updateContestStartTime({ data }: AnyAction) {
    try {
        yield put(
            ContestModuleActions.updateContestStartTimeSuccess(data.start_time)
        );
    } catch (err) {
        yield put(ContestModuleActions.updateContestStartTimeFailure(err));
    }
}

export default function* ContestModuleSaga() {
    yield all([
        takeLatest(ContestModuleTypes.PRE_INIT, preInit),
        takeLatest(ContestModuleTypes.INIT, init),
        takeLatest(ContestModuleTypes.TERMINATE, terminate),
        takeLatest(ContestModuleTypes.REFRESH, refresh),
        takeLatest(ContestModuleTypes.UPDATE_CONTEST_NAME, updateContestName),
        takeLatest(
            ContestModuleTypes.UPDATE_CONTEST_AVATAR,
            updateContestAvatar
        ),
        takeLatest(
            ContestModuleTypes.UPDATE_CONTEST_START_TIME,
            updateContestStartTime
        ),
    ]);
}
