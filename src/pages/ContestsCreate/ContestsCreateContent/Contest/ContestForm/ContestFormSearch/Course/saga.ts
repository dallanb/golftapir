import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CourseService } from '@services';
import ContestsCreatePageContentContestSearchCourseActions, {
    ContestsCreatePageContentContestSearchCourseTypes,
} from './actions';

function* search({ key }: AnyAction) {
    try {
        const { courses } = yield call(CourseService.searchCourses, {
            key,
            fields: 'name',
        });
        yield put(
            ContestsCreatePageContentContestSearchCourseActions.searchSuccess(
                courses
            )
        );
    } catch (err) {
        yield put(
            ContestsCreatePageContentContestSearchCourseActions.searchFailure(
                err
            )
        );
    }
}

export default function* ContestsCreatePageContentContestSaga() {
    yield all([
        takeLatest(
            ContestsCreatePageContentContestSearchCourseTypes.SEARCH,
            search
        ),
    ]);
}
