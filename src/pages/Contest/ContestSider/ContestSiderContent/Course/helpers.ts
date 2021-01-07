import { call, put } from 'redux-saga/effects';
import { ContestService, CourseService } from '@services';
import ContestPageSiderContentCourseActions from './actions';

export function* initCourse(uuid: string) {
    const { contests: contest } = yield call(ContestService.fetchContest, uuid);
    const { courses: course } = yield call(
        CourseService.fetchCourse,
        contest.location_uuid
    );
    yield put(ContestPageSiderContentCourseActions.set({ course }));
}
