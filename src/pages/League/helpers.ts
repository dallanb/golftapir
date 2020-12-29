import { call, put } from 'redux-saga/effects';
import { AccountService, LeagueService } from '@services';
import LeaguePageActions from '@pages/League/actions';
import { keyBy as _keyBy } from 'lodash';

export function* initLeague(uuid: string) {
    const { leagues: league } = yield call(LeagueService.fetchLeague, uuid, {
        include: 'avatar',
    });
    yield put(LeaguePageActions.set({ league }));
}
