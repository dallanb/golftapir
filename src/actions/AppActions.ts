import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        refreshLeague: ['uuid'],
        refreshLeagueSuccess: null,
        refreshLeagueFailure: ['err'],
        refreshLeagueMember: ['uuid'],
        refreshLeagueMemberSuccess: null,
        refreshLeagueMemberFailure: ['err'],
    },
    {
        prefix: 'APP_',
    }
);
export const AppTypes = Types;
export default Creators;
