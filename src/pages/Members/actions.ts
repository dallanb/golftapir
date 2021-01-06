import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        refresh: ['uuid'],
        refreshSuccess: null,
        refreshFailure: ['err'],
        updateMemberStatus: ['uuid', 'status'],
        updateMemberStatusSuccess: ['uuid', 'status'],
        updateMemberStatusFailure: ['err'],
    },
    {
        prefix: 'MEMBERS_PAGE_',
    }
);
export const MembersPageTypes = Types;
export default Creators;
