import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        search: ['key'],
        searchSuccess: null,
        searchFailure: ['err'],
    },
    {
        prefix: 'CONTESTS_PAGE_SIDER_SEARCH_',
    }
);
export const ContestsPageSiderSearchTypes = Types;
export default Creators;
