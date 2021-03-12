import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';
import { CourseService } from '@services';
import CoursesCreatePageContentCourseActions, {
    CoursesCreatePageContentCourseTypes,
} from './actions';
import { prepareInitialValues } from './utils';

function* init({ options }: AnyAction) {
    try {
        const initialValues = prepareInitialValues();
        yield put(
            CoursesCreatePageContentCourseActions.setInitialValues(
                initialValues
            )
        );
        yield put(CoursesCreatePageContentCourseActions.initSuccess());
    } catch (err) {
        yield put(CoursesCreatePageContentCourseActions.initFailure(err));
    }
}

function* submit({ data }: AnyAction) {
    try {
        const {
            courses: { uuid },
            courses: result,
        }: any = yield call(CourseService.createCourse, data);
        yield put(CoursesCreatePageContentCourseActions.setResult(result));
        yield put(CoursesCreatePageContentCourseActions.submitSuccess());
        message.success(CONSTANTS.COURSE.SUCCESS.CREATE);
    } catch (err) {
        yield put(CoursesCreatePageContentCourseActions.submitFailure());
        message.error(CONSTANTS.COURSE.ERROR.CREATE);
    }
}

export default function* CoursesCreatePageContentCourseSaga() {
    yield all([
        takeLatest(CoursesCreatePageContentCourseTypes.INIT, init),
        takeLatest(CoursesCreatePageContentCourseTypes.SUBMIT, submit),
    ]);
}
