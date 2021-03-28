import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        search: ['key'],
        searchSuccess: null,
        searchFailure: ['err'],
    },
    {
        prefix: 'LEAGUES_PAGE_SIDER_SEARCH_',
    }
);
export const LeaguesPageSiderSearchTypes = Types;
export default Creators;
