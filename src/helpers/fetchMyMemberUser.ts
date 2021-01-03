import { put, race, take } from 'redux-saga/effects';
import { MemberActions, MemberTypes } from '@actions';
import CONSTANTS from '@locale/en-CA';

function* fetchMyMemberUser(options?: any) {
    yield put(MemberActions.fetchMyMemberUser(options));
    const { success, failure } = yield race({
        success: take(MemberTypes.FETCH_MY_MEMBER_USER_SUCCESS),
        failure: take(MemberTypes.FETCH_MY_MEMBER_USER_FAILURE),
    });

    if (failure) {
        throw new Error(CONSTANTS.MEMBER.ERROR.FETCH);
    }

    return success;
}

export default fetchMyMemberUser;
