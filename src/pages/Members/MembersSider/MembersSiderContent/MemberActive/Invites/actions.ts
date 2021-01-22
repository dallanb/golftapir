import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        fetchData: ['options', 'append'],
        fetchDataSuccess: ['data', 'metadata'],
        fetchDataFailure: ['err'],
    },
    {
        prefix: 'MEMBERS_PAGE_SIDER_CONTENT_INVITES_',
    }
);
export const MembersPageSiderContentInvitesTypes = Types;
export default Creators;
