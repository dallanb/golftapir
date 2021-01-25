import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['token'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'VERIFY_PAGE_',
    }
);
export const VerifyPageTypes = Types;
export default Creators;
