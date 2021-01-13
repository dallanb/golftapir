import { call, put, select } from 'redux-saga/effects';
import { MemberService } from '@services';
import { selectLeagueUUID } from '@apps/LeagueApp/selector';
import LeagueHomePageContentMemberStandingsActions from './actions';

export function* initMemberStandings(
    options: any = { include: 'stat,avatar', sort_by: 'win_count.desc' }
) {
    const uuid = yield select(selectLeagueUUID);
    const { members } = yield call(MemberService.fetchMemberStandings, {
        ...options,
        league_uuid: uuid,
    });
    yield put(LeagueHomePageContentMemberStandingsActions.setMembers(members));
}
