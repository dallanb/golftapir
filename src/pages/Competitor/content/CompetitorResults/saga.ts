import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import CompetitorPageContentCompetitorResultsActions, {
    CompetitorPageContentCompetitorResultsTypes,
} from './actions';
import { fetchContestsMaterialized } from '@helpers';
import { selectData } from '@pages/Competitor/selector';

function* init() {
    try {
        yield call(fetchData);
        yield put(CompetitorPageContentCompetitorResultsActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageContentCompetitorResultsActions.initFailure());
    }
}

function* fetchData() {
    try {
        const { uuid } = yield select(selectData);
        const { data, metadata } = yield call(fetchContestsMaterialized, {
            page: 1,
            per_page: 3,
            participants: uuid,
            sort_by: 'mtime.desc',
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
