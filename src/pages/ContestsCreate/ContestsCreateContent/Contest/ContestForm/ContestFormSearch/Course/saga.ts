import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CourseService } from '@services';
import ContestsCreatePageContentContestSearchCourseActions, {
    ContestsCreatePageContentContestSearchCourseTypes,
} from './actions';

function* search({ key }: AnyAction) {
    try {
        const { courses }: any = yield call(CourseService.fetchCourses, {
            page: 1,
            per_page: 10,
            search: key,
            status: 'active',
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
