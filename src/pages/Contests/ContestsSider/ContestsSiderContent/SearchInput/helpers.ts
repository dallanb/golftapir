import { put, race, take } from 'redux-saga/effects';
import ContestsPageContentContestsActions, {
    ContestsPageContentContestsTypes,
} from '@pages/Contests/ContestsContent/Contests/actions';
import CONSTANTS from '@locale/en-CA';

export function* refreshContestsList(search: string) {
    const options = Object.assign(
        { page: 1, per_page: 10 },
        search && { search }
    );
    yield put(ContestsPageContentContestsActions.fetchData(options));
    const { failure } = yield race({
        success: take(ContestsPageContentContestsTypes.FETCH_DATA_SUCCESS),
        failure: take(ContestsPageContentContestsTypes.FETCH_DATA_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
    return;
}
