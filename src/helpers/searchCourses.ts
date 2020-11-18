import { put, race, take } from 'redux-saga/effects';
import { CourseActions, CourseTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* searchCourses(key: string): any {
    yield put(CourseActions.searchCourses(key));
    const { success, failure } = yield race({
        success: take(CourseTypes.SEARCH_COURSES_SUCCESS),
        failure: take(CourseTypes.SEARCH_COURSES_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.COURSE.ERROR.FETCH_ALL);
    }

    return success;
}

export default searchCourses;
