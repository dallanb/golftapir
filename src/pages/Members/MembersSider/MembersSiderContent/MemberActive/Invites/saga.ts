import { all, put, takeLatest } from 'redux-saga/effects';
import MembersPageSiderContentInvitesActions, {
    MembersPageSiderContentInvitesTypes,
} from './actions';

function* init() {
    try {
        yield put(MembersPageSiderContentInvitesActions.initSuccess());
    } catch (err) {
        yield put(
            MembersPageSiderContentInvitesActions.initFailure(err.toJSON())
        );
    }
}

export default function* MembersPageSiderContentInvitesSaga() {
    yield all([takeLatest(MembersPageSiderContentInvitesTypes.INIT, init)]);
}
