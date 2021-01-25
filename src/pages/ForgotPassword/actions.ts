import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setFormInitialValues: ['formInitialValues'],
        submit: ['data'],
        submitSuccess: null,
        submitFailure: ['err'],
    },
    {
        prefix: 'FORGOT_PASSWORD_PAGE_',
    }
);
export const ForgotPasswordPageTypes = Types;
export default Creators;
