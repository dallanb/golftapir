import { all, call, put, takeLatest } from 'redux-saga/effects';
import LeagueMemberSettingsPageActions, {
    LeagueMemberSettingsPageTypes,
} from './actions';
import { LeagueMemberSettingsService } from '@services';

function* init() {
    try {
        const { accounts: account } = yield call(
            LeagueMemberSettingsService.fetchLeagueMemberSettings,
            'me',
            {
                include: 'phone,address',
            }
        );
        yield put(LeagueMemberSettingsPageActions.set({ account }));

        yield put(LeagueMemberSettingsPageActions.initSuccess());
    } catch (err) {
        yield put(LeagueMemberSettingsPageActions.initFailure(err));
    }
}

export default function* LeagueMemberSettingsPageSaga() {
    yield all([takeLatest(LeagueMemberSettingsPageTypes.INIT, init)]);
}
