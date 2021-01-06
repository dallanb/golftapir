import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import MemberSettingsPageActions, { MemberSettingsPageTypes } from './actions';
import { MemberService } from '@services';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';

function* init() {
    try {
        const { members: member } = yield call(
            MemberService.fetchMemberUser,
            'me',
            { include: 'avatar', league_uuid: yield select(selectLeagueUUID) }
        );
        yield put(MemberSettingsPageActions.set({ member }));

        yield put(MemberSettingsPageActions.initSuccess());
    } catch (err) {
        yield put(MemberSettingsPageActions.initFailure(err));
    }
}

export default function* MemberSettingsPageSaga() {
    yield all([takeLatest(MemberSettingsPageTypes.INIT, init)]);
}
