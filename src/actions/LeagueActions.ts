import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchLeague: ['uuid', 'options'],
        fetchLeagueSuccess: ['data'],
        fetchLeagueFailure: ['err'],
        fetchLeagues: ['options'],
        fetchLeaguesSuccess: ['data'],
        fetchLeaguesFailure: ['err'],
        updateLeague: ['uuid', 'values'],
        updateLeagueSuccess: ['data'],
        updateLeagueFailure: ['err'],
    },
    {
        prefix: 'LEAGUE_',
    }
);
export const LeagueTypes = Types;
export default Creators;
