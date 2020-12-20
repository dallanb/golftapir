import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import CourseActions, { CourseTypes } from '@actions/CourseActions';
import { CourseService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* fetchCourse({ uuid, options }: AnyAction) {
    try {
        const res = yield call(CourseService.fetchCourse, uuid, options);
        const { courses, _metadata: metadata } = res;
        yield put(CourseActions.fetchCourseSuccess(courses, metadata));
    } catch (err) {
        yield put(CourseActions.fetchCourseFailure(err));
        message.error(CONSTANTS.COURSE.ERROR.FETCH);
    }
}

function* fetchCourses({ options }: AnyAction) {
    try {
        const res = yield call(CourseService.fetchCourses, options);
        const { courses, _metadata: metadata } = res;
        yield put(CourseActions.fetchCoursesSuccess(courses, metadata));
    } catch (err) {
        yield put(CourseActions.fetchCoursesFailure(err));
        message.error(CONSTANTS.COURSE.ERROR.FETCH);
    }
}

export default function* CourseSaga() {
    yield all([
        takeLatest(CourseTypes.FETCH_COURSE, fetchCourse),
        takeLatest(CourseTypes.FETCH_COURSES, fetchCourses),
    ]);
}
