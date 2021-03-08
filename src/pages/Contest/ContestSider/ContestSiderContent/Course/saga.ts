import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import ContestPageSiderContentCourseActions, {
    ContestPageSiderContentCourseTypes,
} from './actions';
import { selectContestUUID } from '@pages/Contest/selector';
import { initCourse } from './helpers';

function* init() {
    try {
        const uuid = yield select(selectContestUUID);
        yield call(initCourse, uuid);
        yield put(ContestPageSiderContentCourseActions.initSuccess());
    } catch (err) {
        yield put(
            ContestPageSiderContentCourseActions.initFailure(err.toJSON())
        );
    }
}

export default function* ContestPageSiderContentCourseSaga() {
    yield all([takeLatest(ContestPageSiderContentCourseTypes.INIT, init)]);
}
