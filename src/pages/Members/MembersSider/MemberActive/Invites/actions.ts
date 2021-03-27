import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'MEMBERS_PAGE_SIDER_INVITES_',
    }
);
export const MembersPageSiderInvitesTypes = Types;
export default Creators;
