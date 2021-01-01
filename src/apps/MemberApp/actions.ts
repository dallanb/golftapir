import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: [],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'MEMBER_APP_',
    }
);
export const MemberAppTypes = Types;
export default Creators;
