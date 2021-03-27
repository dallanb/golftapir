import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'LEAGUE_HOME_PAGE_MEMBER_STATS_',
    }
);
export const LeagueHomePageSiderMemberStatsTypes = Types;
export default Creators;
