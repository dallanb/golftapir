import { all, put, select, takeLatest } from 'redux-saga/effects';
import ContestPageSiderContentCourseActions, {
    ContestPageSiderContentCourseTypes,
} from './actions';
import { selectContestUUID } from '@pages/Contest/selector';

function* init() {
    try {
        const uuid = yield select(selectContestUUID);
        // yield call(initSheet, uuid);
        yield put(ContestPageSiderContentCourseActions.initSuccess());
    } catch (err) {
        yield put(ContestPageSiderContentCourseActions.initFailure(err));
    }
}

export default function* ContestPageSiderContentCourseSaga() {
    yield all([takeLatest(ContestPageSiderContentCourseTypes.INIT, init)]);
}
