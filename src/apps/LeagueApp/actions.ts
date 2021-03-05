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
        initLeague: ['uuid'],
        initLeagueSuccess: null,
        initLeagueFailure: ['err'],
        setLeague: ['data'],
        initLeagueMember: ['uuid'],
        initLeagueMemberSuccess: null,
        initLeagueMemberFailure: ['err'],
        setLeagueMember: ['data'],
        initLeagueMembers: ['uuid'],
        initLeagueMembersSuccess: null,
        initLeagueMembersFailure: ['err'],
        setLeagueMembers: ['data', 'metadata'],
    },
    {
        prefix: 'LEAGUE_APP_',
    }
);
export const LeagueAppTypes = Types;
export default Creators;
