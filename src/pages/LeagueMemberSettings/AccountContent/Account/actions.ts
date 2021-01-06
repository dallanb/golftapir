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
        prefix: 'LEAGUE_MEMBER_SETTINGS_PAGE_CONTENT_MEMBER_',
    }
);
export const LeagueMemberSettingsPageContentLeagueMemberSettingsTypes = Types;
export default Creators;
