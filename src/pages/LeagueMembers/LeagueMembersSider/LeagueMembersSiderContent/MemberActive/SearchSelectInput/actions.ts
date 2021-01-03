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
        prefix: 'LEAGUE_MEMBERS_PAGE_SIDER_CONTENT_SEARCH_',
    }
);
export const LeagueMembersPageSiderContentSearchTypes = Types;
export default Creators;
