import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        preInit: ['data'],
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        refresh: ['uuid'],
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
        fetchLeague: ['uuid', 'options'],
        fetchLeagueSuccess: ['league'],
        fetchLeagueFailure: ['err'],
        fetchLeagueMember: ['uuid', 'options'],
        fetchLeagueMemberSuccess: ['leagueMember'],
        fetchLeagueMemberFailure: ['err'],
    },
    {
        prefix: 'LEAGUE_APP_',
    }
);
export const LeagueAppTypes = Types;
export default Creators;
