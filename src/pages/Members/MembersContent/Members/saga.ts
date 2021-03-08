import { all, put, select, takeLatest } from 'redux-saga/effects';
import MembersPageContentMembersActions, {
    MembersPageContentMembersTypes,
} from './actions';
import { selectLeagueUUID } from '@selectors/AppSelector';
import { AppActions } from '@actions';

function* init() {
    try {
        yield put(MembersPageContentMembersActions.initSuccess());
    } catch (err) {
        yield put(MembersPageContentMembersActions.initFailure(err.toJSON()));
    }
}

function* refresh() {
    try {
        const uuid = yield select(selectLeagueUUID);
        yield put(AppActions.refreshLeagueMembers(uuid));
        yield put(MembersPageContentMembersActions.refreshSuccess());
    } catch (err) {
        yield put(
            MembersPageContentMembersActions.refreshFailure(err.toJSON())
        );
    }
}

export default function* MembersPageContentMembersSaga() {
    yield all([
        takeLatest(MembersPageContentMembersTypes.INIT, init),
        takeLatest(MembersPageContentMembersTypes.REFRESH, refresh),
    ]);
}
