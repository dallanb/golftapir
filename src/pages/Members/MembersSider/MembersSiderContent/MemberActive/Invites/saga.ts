import { AnyAction } from 'redux';
import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { LeagueService } from '@services';
import { selectLeagueUUID } from '@selectors/AppSelector';
import MembersPageSiderContentInvitesActions, {
    MembersPageSiderContentInvitesTypes,
} from './actions';
import { fetchInvitesList } from './helpers';

function* init() {
    try {
        yield call(fetchInvitesList, {
            page: 1,
            per_page: 10,
            league_uuid: yield select(selectLeagueUUID),
        });
        yield put(MembersPageSiderContentInvitesActions.initSuccess());
    } catch (err) {
        yield put(MembersPageSiderContentInvitesActions.initFailure(err));
    }
}

function* fetchData({ options = { page: 1, per_page: 10 } }: AnyAction) {
    try {
        const { members, _metadata: metadata }: any = yield call(
            LeagueService.fetchMembersMaterialized,
            {
                ...options,
                status: 'invited',
            }
        );
        yield put(
            MembersPageSiderContentInvitesActions.fetchDataSuccess(
                members,
                metadata
            )
        );
    } catch (err) {
        yield put(MembersPageSiderContentInvitesActions.fetchDataFailure(err));
    }
}

export default function* MembersPageSiderContentInvitesSaga() {
    yield all([
        takeLatest(MembersPageSiderContentInvitesTypes.INIT, init),
        takeLatest(MembersPageSiderContentInvitesTypes.FETCH_DATA, fetchData),
    ]);
}
