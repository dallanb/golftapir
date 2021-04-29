import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import ContestPageSiderCourseActions, {
    ContestPageSiderCourseTypes,
} from './actions';
import { selectContestUUID } from '@modules/Contest/selector';
import { initCourse } from './helpers';

function* init() {
    try {
        const uuid = yield select(selectContestUUID);
        yield call(initCourse, uuid);
        yield put(ContestPageSiderCourseActions.initSuccess());
    } catch (err) {
        yield put(ContestPageSiderCourseActions.initFailure(err));
    }
}

export default function* ContestPageSiderCourseSaga() {
    yield all([takeLatest(ContestPageSiderCourseTypes.INIT, init)]);
}
