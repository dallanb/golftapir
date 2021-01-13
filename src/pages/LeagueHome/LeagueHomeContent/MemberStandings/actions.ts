import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        refresh: null,
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
        setMembers: ['members'],
    },
    {
        prefix: 'LEAGUE_HOME_PAGE_CONTENT_MEMBER_STANDINGS_',
    }
);
export const LeagueHomePageContentMemberStandingsTypes = Types;
export default Creators;
