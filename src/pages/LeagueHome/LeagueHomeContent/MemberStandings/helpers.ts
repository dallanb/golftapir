import { call, put, select } from 'redux-saga/effects';
import { MemberService } from '@services';
import { selectLeagueUUID } from '@selectors/AppSelector';
import LeagueHomePageContentMemberStandingsActions from './actions';

export function* initMemberStandings(
    options: any = {
        include: 'stat,avatar',
        status: 'active',
        sort_by: 'win_count.desc',
    }
) {
    const uuid: any = yield select(selectLeagueUUID);
    const { members }: any = yield call(MemberService.fetchMemberStandings, {
        ...options,
        league_uuid: uuid,
    });
    yield put(LeagueHomePageContentMemberStandingsActions.setMembers(members));
}
