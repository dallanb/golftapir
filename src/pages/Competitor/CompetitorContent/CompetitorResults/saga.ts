import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import { ContestService } from '@services';
import CompetitorPageContentCompetitorResultsActions, {
    CompetitorPageContentCompetitorResultsTypes,
} from './actions';
import { fetchCompetitorResults } from './helpers';
import { selectData } from '@pages/Competitor/selector';

function* init() {
    try {
        yield call(fetchCompetitorResults);
        yield put(CompetitorPageContentCompetitorResultsActions.initSuccess());
    } catch (err) {
        yield put(
            CompetitorPageContentCompetitorResultsActions.initFailure(err)
        );
    }
}

function* fetchData({
    options = {
        page: 1,
        per_page: 3,
        sort_by: 'mtime.desc',
    },
}: AnyAction) {
    try {
        const competitorData = yield select(selectData);
        const member_uuid = _get(competitorData, ['member', 'uuid'], null);
        const { contests, _metadata: metadata } = yield call(
            ContestService.fetchContestsMaterialized,
            {
                ...options,
                participants: member_uuid,
            }
        );
        yield put(
            CompetitorPageContentCompetitorResultsActions.fetchDataSuccess(
                contests,
                metadata
            )
        );
    } catch (err) {
        yield put(
            CompetitorPageContentCompetitorResultsActions.fetchDataFailure(err)
        );
    }
}

export default function* CompetitorPageContentCompetitorResultsSaga() {
    yield all([
        takeLatest(CompetitorPageContentCompetitorResultsTypes.INIT, init),
        takeLatest(
            CompetitorPageContentCompetitorResultsTypes.FETCH_DATA,
            fetchData
        ),
    ]);
}
