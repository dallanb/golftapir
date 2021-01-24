import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setInitialValues: ['initialValues'],
        setResult: ['result'],
        submit: ['data'],
        submitSuccess: null,
        submitFailure: ['err'],
    },
    {
        prefix: 'MEMBERS_CREATE_PAGE_CONTENT_MEMBER_',
    }
);
export const MembersCreatePageContentMemberTypes = Types;
export default Creators;
