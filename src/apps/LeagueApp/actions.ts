import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        preInit: ['data'],
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        terminateSuccess: null,
        terminateFailure: ['err'],
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
        leagueMemberActiveEvent: ['uuid', 'payload'], // this is the handler for constants.EVENTS.LEAGUES.MEMBER_ACTIVE event
        leagueMemberInactiveEvent: ['uuid', 'payload'], // this is the handler for constants.EVENTS.LEAGUES.MEMBER_INACTIVE event
    },
    {
        prefix: 'LEAGUE_APP_',
    }
);
export const LeagueAppTypes = Types;
export default Creators;
