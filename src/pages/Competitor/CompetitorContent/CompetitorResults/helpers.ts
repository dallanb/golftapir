import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import CompetitorPageContentCompetitorResultsActions, {
    CompetitorPageContentCompetitorResultsTypes,
} from './actions';

export function* fetchCompetitorResults() {
    yield put(CompetitorPageContentCompetitorResultsActions.fetchData());
    const { success, failure } = yield race({
        success: take(
            CompetitorPageContentCompetitorResultsTypes.FETCH_DATA_SUCCESS
        ),
        failure: take(
            CompetitorPageContentCompetitorResultsTypes.FETCH_DATA_FAILURE
        ),
    });
    if (failure) {
        throw new Error(CONSTANTS.COMPETITOR.ERROR.FETCH_CONTEST_RESULTS);
    }

    return success;
}
