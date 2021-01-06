import { put, race, take } from 'redux-saga/effects';
import CONSTANTS from '@locale/en-CA';
import MembersPageContentMembersActions, {
    MembersPageContentMembersTypes,
} from './actions';

export function* fetchMembersList() {
    yield put(MembersPageContentMembersActions.fetchData());
    const { success, failure } = yield race({
        success: take(MembersPageContentMembersTypes.FETCH_DATA_SUCCESS),
        failure: take(MembersPageContentMembersTypes.FETCH_DATA_FAILURE),
    });
    if (failure) {
        throw new Error(CONSTANTS.MEMBER.ERROR.FETCH_ALL);
    }
    return success;
}
