import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import CompetitorsPageContentCompetitorsActions, {
    CompetitorsPageContentCompetitorsTypes,
} from './actions';

export function* fetchCompetitorsList() {
    yield put(CompetitorsPageContentCompetitorsActions.fetchData());
    const { success, failure } = yield race({
        success: take(
            CompetitorsPageContentCompetitorsTypes.FETCH_DATA_SUCCESS
        ),
        failure: take(
            CompetitorsPageContentCompetitorsTypes.FETCH_DATA_FAILURE
        ),
    });
    if (failure) {
        throw new Error(CONSTANTS.COMPETITOR.ERROR.FETCH_ALL);
    }
    return success;
}
