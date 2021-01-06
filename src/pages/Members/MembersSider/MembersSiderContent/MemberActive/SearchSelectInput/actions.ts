import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        search: ['key'],
        searchSuccess: ['data'],
        searchFailure: ['err'],
        invite: ['uuid'],
        inviteSuccess: null,
        inviteFailure: ['err'],
    },
    {
        prefix: 'MEMBERS_PAGE_SIDER_CONTENT_SEARCH_',
    }
);
export const MembersPageSiderContentSearchTypes = Types;
export default Creators;
