import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        search: ['key'],
        searchSuccess: ['data'],
        searchFailure: ['err'],
        clearSearch: null,
        invite: ['uuid', 'email'],
        inviteSuccess: null,
        inviteFailure: ['err'],
    },
    {
        prefix: 'MEMBERS_PAGE_SIDER_SEARCH_',
    }
);
export const MembersPageSiderSearchTypes = Types;
export default Creators;
