import { createSelector } from 'reselect';

const getLeagueHomePageSiderContentCalendar = (state: any) =>
    state.leagueHomePage.ui.sider.content.calendar;

export const selectData = createSelector(
    [getLeagueHomePageSiderContentCalendar],
    (calendar) => calendar
);
