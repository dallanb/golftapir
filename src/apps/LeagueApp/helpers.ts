import { call, select } from 'redux-saga/effects';
import { selectLeagues, selectMe } from '@selectors/BaseSelector';
import {
    fetchMyAccount as fetchMyAccountHelper,
    fetchMyLeagues as fetchMyLeaguesHelper,
} from '@helpers';

export function* fetchMyAccount() {
    let me = yield select(selectMe);
    if (!me) {
        me = yield call(fetchMyAccountHelper, { include: 'avatar' });
    }
    return me;
}

export function* fetchMyLeagues() {
    // let leagues = yield select(selectLeagues);
    return yield call(fetchMyLeaguesHelper, {
        page: 1,
        per_page: 100,
        include: 'avatar',
    });
}
