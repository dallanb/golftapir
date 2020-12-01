import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import CompetitorsPageContentCompetitorsActions, {
    CompetitorsPageContentCompetitorsTypes,
} from './actions';
import { fetchAccounts } from '@helpers';

function* init() {
    try {
        yield put(CompetitorsPageContentCompetitorsActions.fetchData());
        yield put(CompetitorsPageContentCompetitorsActions.initSuccess());
    } catch (err) {
        yield put(CompetitorsPageContentCompetitorsActions.initFailure());
    }
}

function* fetchData({
    options = {
        page: 1,
        per_page: 10,
        include: 'avatar',
    },
}: AnyAction) {
    try {
        const { data, metadata } = yield call(fetchAccounts, options);
        yield put(
            CompetitorsPageContentCompetitorsActions.fetchDataSuccess(
                data,
                metadata
            )
        );
    } catch (err) {
        yield put(
            CompetitorsPageContentCompetitorsActions.fetchDataFailure(err)
        );
    }
}

export default function* CompetitorsPageContentCompetitorsSaga() {
    yield all([
        takeLatest(CompetitorsPageContentCompetitorsTypes.INIT, init),
        takeLatest(
            CompetitorsPageContentCompetitorsTypes.FETCH_DATA,
            fetchData
        ),
    ]);
}
