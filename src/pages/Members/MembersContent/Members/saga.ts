import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { LeagueService, MemberService } from '@services';
import MembersPageContentMembersActions, {
    MembersPageContentMembersTypes,
} from './actions';
import { fetchMembersList } from './helpers';
import { selectLeagueUUID } from '@selectors/AppSelector';

function* init() {
    try {
        yield call(fetchMembersList);
        yield put(MembersPageContentMembersActions.initSuccess());
    } catch (err) {
        yield put(MembersPageContentMembersActions.initFailure(err));
    }
}

function* refresh() {
    try {
        yield call(fetchMembersList);
        yield put(MembersPageContentMembersActions.refreshSuccess());
    } catch (err) {
        yield put(MembersPageContentMembersActions.refreshFailure(err));
    }
}

function* fetchData({
    options = {
        page: 1,
        per_page: 10,
    },
}: AnyAction) {
    try {
        const uuid: any = yield select(selectLeagueUUID);
        const { members, metadata }: any = yield call(
            LeagueService.fetchMembersMaterialized,
            {
                ...options,
                league_uuid: uuid,
                status: 'active',
            }
        );
        yield put(
            MembersPageContentMembersActions.fetchDataSuccess(members, metadata)
        );
    } catch (err) {
        yield put(MembersPageContentMembersActions.fetchDataFailure(err));
    }
}

export default function* MembersPageContentMembersSaga() {
    yield all([
        takeLatest(MembersPageContentMembersTypes.INIT, init),
        takeLatest(MembersPageContentMembersTypes.REFRESH, refresh),
        takeLatest(MembersPageContentMembersTypes.FETCH_DATA, fetchData),
    ]);
}
