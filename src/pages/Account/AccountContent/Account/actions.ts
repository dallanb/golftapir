import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setInitialValues: ['initialValues'],
        submit: ['data'],
        submitSuccess: null,
        submitFailure: ['err'],
    },
    {
        prefix: 'ACCOUNT_PAGE_CONTENT_ACCOUNT_',
    }
);
export const AccountPageContentAccountTypes = Types;
export default Creators;
