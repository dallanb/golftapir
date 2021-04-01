import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: [],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        terminateSuccess: null,
        terminateFailure: ['err'],
        refresh: ['uuid'],
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
    },
    {
        prefix: 'MEMBER_APP_',
    }
);
export const MemberAppTypes = Types;
export default Creators;
