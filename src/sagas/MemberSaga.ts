import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import MemberActions, { MemberTypes } from '@actions/MemberActions';
import { MemberService } from '@services';
import CONSTANTS from '@locale/en-CA';
import { selectMyStat } from '@selectors/BaseSelector';

function* fetchMember({ uuid, options }: AnyAction) {
    try {
        const res: any = yield call(MemberService.fetchMember, uuid, options);
        const { members } = res;
        yield put(MemberActions.fetchMemberSuccess(members));
    } catch (err) {
        yield put(MemberActions.fetchMemberFailure(err));
        message.error(CONSTANTS.MEMBER.ERROR.FETCH);
    }
}

function* fetchMemberUser({ user_uuid, options }: AnyAction) {
    try {
        const res: any = yield call(
            MemberService.fetchMemberUser,
            user_uuid,
            options
        );
        const { members } = res;
        yield put(MemberActions.fetchMemberUserSuccess(members));
    } catch (err) {
        yield put(MemberActions.fetchMemberUserFailure(err));
        message.error(CONSTANTS.MEMBER.ERROR.FETCH);
    }
}

function* fetchMyMemberUser({ options }: AnyAction) {
    try {
        const res: any = yield call(
            MemberService.fetchMemberUser,
            'me',
            options
        );
        const { members } = res;
        yield put(MemberActions.fetchMyMemberUserSuccess(members));
    } catch (err) {
        yield put(MemberActions.fetchMyMemberUserFailure(err));
        message.error(CONSTANTS.MEMBER.ERROR.FETCH);
    }
}

function* fetchMembers({ options }: AnyAction) {
    try {
        const res: any = yield call(MemberService.fetchMembers, options);
        const { leagues } = res;
        yield put(MemberActions.fetchMembersSuccess(leagues));
    } catch (err) {
        yield put(MemberActions.fetchMembersFailure(err));
        message.error(CONSTANTS.MEMBER.ERROR.FETCH_ALL);
    }
}

function* updateMember({ uuid, values }: AnyAction) {
    try {
        const res: any = yield call(MemberService.updateMember, uuid, values);
        const { leagues } = res;
        yield put(MemberActions.updateMemberSuccess(leagues));
    } catch (err) {
        yield put(MemberActions.updateMemberFailure(err));
        message.error(CONSTANTS.MEMBER.ERROR.UPDATE);
    }
}

function* assignAvatar({ uuid, avatar }: AnyAction) {
    try {
        yield call(MemberService.assignAvatar, uuid, avatar);
        yield put(MemberActions.assignAvatarSuccess());
    } catch (err) {
        yield put(MemberActions.assignAvatarFailure(err));
        message.error(CONSTANTS.MEMBER.ERROR.ASSIGN_AVATAR);
    }
}

function* refreshMyMemberStats({}) {
    try {
        const stat: any = yield select(selectMyStat);
        const { stats }: any = yield call(MemberService.fetchStat, stat.uuid);
        yield put(MemberActions.refreshMyMemberStatsSuccess(stats));
    } catch (err) {
        yield put(MemberActions.refreshMyMemberStatsFailure(err));
    }
}

export default function* MemberSaga() {
    yield all([
        takeLatest(MemberTypes.FETCH_MEMBER, fetchMember),
        takeLatest(MemberTypes.FETCH_MEMBER_USER, fetchMemberUser),
        takeLatest(MemberTypes.FETCH_MY_MEMBER_USER, fetchMyMemberUser),
        takeLatest(MemberTypes.FETCH_MEMBERS, fetchMembers),
        takeLatest(MemberTypes.UPDATE_MEMBER, updateMember),
        takeLatest(MemberTypes.ASSIGN_AVATAR, assignAvatar),
        takeLatest(MemberTypes.REFRESH_MY_MEMBER_STATS, refreshMyMemberStats),
    ]);
}
