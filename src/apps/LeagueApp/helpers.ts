import { put, select } from 'redux-saga/effects';
import { isNil as _isNil } from 'lodash';
import LeagueAppActions from '@apps/LeagueApp/actions';
import { selectLeagueData, selectLeagueMemberData } from './selector';

export function* initLeague(uuid: string) {
    const data: any = yield select(selectLeagueData);
    if (_isNil(data)) {
        yield put(
            LeagueAppActions.fetchLeague(uuid, {
                include: 'avatar',
            })
        );
    }
}

export function* refreshLeague(uuid: string) {
    yield put(LeagueAppActions.fetchLeague(uuid, { include: 'avatar' }));
}

export function* initLeagueMember(uuid: string) {
    const data: any = yield select(selectLeagueMemberData);
    if (_isNil(data)) {
        yield put(
            LeagueAppActions.fetchLeagueMember('me', {
                league_uuid: uuid,
            })
        );
    }
}

export function* refreshLeagueMember(uuid: string) {
    yield put(
        LeagueAppActions.fetchLeagueMember('me', {
            league_uuid: uuid,
        })
    );
}
