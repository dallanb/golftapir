import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        search: ['key'],
        searchSuccess: null,
        searchFailure: ['err'],
    },
    {
        prefix: 'LEAGUES_PAGE_SIDER_CONTENT_SEARCH_',
    }
);
export const LeaguesPageSiderContentSearchTypes = Types;
export default Creators;
