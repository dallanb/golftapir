import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setInitialValues: ['initialValues'],
    },
    {
        prefix: 'MEMBER_PAGE_CONTENT_MEMBER_INFO_',
    }
);
export const MemberPageContentMemberInfoTypes = Types;
export default Creators;
