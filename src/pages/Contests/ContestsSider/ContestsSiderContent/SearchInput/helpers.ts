import { put, race, select, take } from 'redux-saga/effects';
import ContestsPageContentContestsActions, {
    ContestsPageContentContestsTypes,
} from '@pages/Contests/ContestsContent/Contests/actions';
import CONSTANTS from '@locale/en-CA';
import { selectLeagueUUID } from '@selectors/AppSelector';

export function* refreshContestsList(search: string) {
    const league_uuid = yield select(selectLeagueUUID);
    const options = Object.assign(
        { page: 1, per_page: 10, league_uuid },
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
