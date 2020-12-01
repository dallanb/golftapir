import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import CompetitorPageContentCompetitorResultsActions, {
    CompetitorPageContentCompetitorResultsTypes,
} from './actions';
import { fetchContestsMaterialized } from '@helpers';
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
        const membership_uuid = _get(
            competitorData,
            ['account', 'membership_uuid'],
            null
        );
        const { data, metadata } = yield call(fetchContestsMaterialized, {
            ...options,
            participants: membership_uuid,
        });
        yield put(
            CompetitorPageContentCompetitorResultsActions.fetchDataSuccess(
                data,
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
