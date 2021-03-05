import { call, put } from 'redux-saga/effects';
import LeagueAppActions from '@apps/LeagueApp/actions';
import { LeagueService } from '@services';

export function* fetchLeague(uuid: string) {
    const { leagues: league } = yield call(LeagueService.fetchLeague, uuid, {
        include: 'avatar',
    });
    yield put(LeagueAppActions.setLeague(league));
}

export function* fetchLeagueMember(league_uuid: string) {
    const { members: leagueMember }: any = yield call(
        LeagueService.fetchMembersMaterializedUser,
        'me',
        {
            league_uuid,
        }
    );
    yield put(LeagueAppActions.setLeagueMember(leagueMember));
}

export function* fetchLeagueMembers(league_uuid: string) {
    const { members: leagueMembers, _metadata: metadata }: any = yield call(
        LeagueService.fetchMembersMaterialized,
        {
            league_uuid,
        }
    );
    yield put(LeagueAppActions.setLeagueMembers(leagueMembers, metadata));
}
