import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        search: ['key'],
        searchSuccess: ['data'],
        searchFailure: ['err'],
    },
    {
        prefix: 'LEAGUES_CREATE_PAGE_CONTENT_LEAGUE_SEARCH_MEMBER_',
    }
);
export const LeaguesCreatePageContentLeagueSearchMemberTypes = Types;
export default Creators;
