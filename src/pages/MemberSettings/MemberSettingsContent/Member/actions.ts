import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setInitialValues: ['initialValues'],
        submit: ['uuid', 'data'],
        submitSuccess: null,
        submitFailure: ['err'],
    },
    {
        prefix: 'MEMBER_SETTINGS_PAGE_CONTENT_MEMBER_',
    }
);
export const MemberSettingsPageContentMemberTypes = Types;
export default Creators;
