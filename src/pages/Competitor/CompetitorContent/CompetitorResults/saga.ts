import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import CompetitorPageContentCompetitorResultsActions, {
    CompetitorPageContentCompetitorResultsTypes,
} from './actions';
import { fetchContestsMaterialized } from '@helpers';
import { selectData } from '@pages/Competitor/selector';

function* init() {
    try {
        yield put(CompetitorPageContentCompetitorResultsActions.fetchData());
        yield put(CompetitorPageContentCompetitorResultsActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageContentCompetitorResultsActions.initFailure());
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
        const { uuid } = yield select(selectData);
        const { data, metadata } = yield call(fetchContestsMaterialized, {
            ...options,
            participants: uuid,
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
