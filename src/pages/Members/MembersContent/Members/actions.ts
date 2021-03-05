import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        refresh: null,
        refreshSuccess: null,
        refreshFailure: ['err'],
    },
    {
        prefix: 'MEMBERS_PAGE_CONTENT_MEMBERS_',
    }
);
export const MembersPageContentMembersTypes = Types;
export default Creators;
