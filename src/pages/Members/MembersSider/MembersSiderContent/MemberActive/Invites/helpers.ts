import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import MembersPageSiderContentInvitesActions, {
    MembersPageSiderContentInvitesTypes,
} from './actions';

export function* fetchInvitesList(options: any = { page: 1, per_page: 10 }) {
    yield put(MembersPageSiderContentInvitesActions.fetchData(options));
    const { success, failure } = yield race({
        success: take(MembersPageSiderContentInvitesTypes.FETCH_DATA_SUCCESS),
        failure: take(MembersPageSiderContentInvitesTypes.FETCH_DATA_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.MEMBER.ERROR.FETCH_ALL);
    }
    return success;
}
