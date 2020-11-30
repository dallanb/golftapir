import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { searchCourses } from '@helpers';
import ContestsCreatePageContentContestSearchCourseActions, {
    ContestsCreatePageContentContestSearchCourseTypes,
} from './actions';

function* search({ key }: AnyAction) {
    try {
        const { data } = yield call(searchCourses, key);
        yield put(
            ContestsCreatePageContentContestSearchCourseActions.searchSuccess(
                data
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
