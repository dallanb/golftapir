import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['token'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setFormInitialValues: ['formInitialValues'],
    },
    {
        prefix: 'REGISTER_PAGE_',
    }
);
export const RegisterPageTypes = Types;
export default Creators;
