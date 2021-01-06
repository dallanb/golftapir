import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import { ContestService } from '@services';
import MemberPageContentMemberResultsActions, {
    MemberPageContentMemberResultsTypes,
} from './actions';
import { fetchMemberResults } from './helpers';
import { selectData } from '@pages/Competitor/selector';

function* init() {
    try {
        yield call(fetchMemberResults);
        yield put(MemberPageContentMemberResultsActions.initSuccess());
    } catch (err) {
        yield put(
            MemberPageContentMemberResultsActions.initFailure(err)
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
        const memberData = yield select(selectData);
        const member_uuid = _get(memberData, ['member', 'uuid'], null);
        const { contests, _metadata: metadata } = yield call(
            ContestService.fetchContestsMaterialized,
            {
                ...options,
                participants: member_uuid,
            }
        );
        yield put(
            MemberPageContentMemberResultsActions.fetchDataSuccess(
                contests,
                metadata
            )
        );
    } catch (err) {
        yield put(
            MemberPageContentMemberResultsActions.fetchDataFailure(err)
        );
    }
}

export default function* MemberPageContentMemberResultsSaga() {
    yield all([
        takeLatest(MemberPageContentMemberResultsTypes.INIT, init),
        takeLatest(
            MemberPageContentMemberResultsTypes.FETCH_DATA,
            fetchData
        ),
    ]);
}