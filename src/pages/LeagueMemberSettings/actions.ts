import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'LEAGUE_MEMBER_SETTINGS_PAGE_',
    }
);
export const LeagueMemberSettingsPageTypes = Types;
export default Creators;
