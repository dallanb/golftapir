import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'MEMBER_SETTINGS_PAGE_',
    }
);
export const MemberSettingsPageTypes = Types;
export default Creators;
