import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        preInit: ['data'],
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        refresh: ['uuid'],
        refreshSuccess: null,
        refreshFailure: ['err'],
    },
    {
        prefix: 'MEMBER_PAGE_',
    }
);
export const MemberPageTypes = Types;
export default Creators;
