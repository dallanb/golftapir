import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        search: ['key'],
        searchSuccess: null,
        searchFailure: ['err'],
    },
    {
        prefix: 'CONTESTS_PAGE_SIDER_CONTENT_SEARCH_',
    }
);
export const ContestsPageSiderContentSearchTypes = Types;
export default Creators;
