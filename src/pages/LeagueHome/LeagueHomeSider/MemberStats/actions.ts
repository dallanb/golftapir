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
        prefix: 'LEAGUE_HOME_PAGE_CONTENT_MEMBER_STATS_',
    }
);
export const LeagueHomePageSiderContentMemberStatsTypes = Types;
export default Creators;
