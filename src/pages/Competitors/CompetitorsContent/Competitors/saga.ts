import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { MemberService } from '@services';
import CompetitorsPageContentCompetitorsActions, {
    CompetitorsPageContentCompetitorsTypes,
} from './actions';
import { fetchCompetitorsList } from './helpers';

function* init() {
    try {
        yield call(fetchCompetitorsList);
        yield put(CompetitorsPageContentCompetitorsActions.initSuccess());
    } catch (err) {
        yield put(CompetitorsPageContentCompetitorsActions.initFailure(err));
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
        const { members, metadata } = yield call(
            MemberService.fetchMembers,
            options
        );
        yield put(
            CompetitorsPageContentCompetitorsActions.fetchDataSuccess(
                members,
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
