import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        fetchData: ['options', 'append'],
        fetchDataSuccess: ['data', 'metadata'],
        fetchDataFailure: ['err'],
    },
    {
        prefix: 'LEAGUE_HOME_PAGE_SIDER_CONTENT_CALENDAR_',
    }
);
export const LeagueHomePageSiderContentCalendarTypes = Types;
export default Creators;
