import { all, put, takeLatest } from 'redux-saga/effects';
import MembersPageSiderInvitesActions, {
    MembersPageSiderInvitesTypes,
} from './actions';

function* init() {
    try {
        yield put(MembersPageSiderInvitesActions.initSuccess());
    } catch (err) {
        yield put(MembersPageSiderInvitesActions.initFailure(err));
    }
}

export default function* MembersPageSiderInvitesSaga() {
    yield all([takeLatest(MembersPageSiderInvitesTypes.INIT, init)]);
}
