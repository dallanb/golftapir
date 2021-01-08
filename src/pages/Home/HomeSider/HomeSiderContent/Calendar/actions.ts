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
        prefix: 'HOME_PAGE_SIDER_CONTENT_CALENDAR_',
    }
);
export const HomePageSiderContentCalendarTypes = Types;
export default Creators;
