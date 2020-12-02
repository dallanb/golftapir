import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import ContestsPageContentContestsActions, {
    ContestsPageContentContestsTypes,
} from './actions';

export function* fetchContestsList() {
    yield put(ContestsPageContentContestsActions.fetchData());
    const { success, failure } = yield race({
        success: take(ContestsPageContentContestsTypes.FETCH_DATA_SUCCESS),
        failure: take(ContestsPageContentContestsTypes.FETCH_DATA_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.CONTEST.ERROR.FETCH_ALL);
    }
    return success;
}
