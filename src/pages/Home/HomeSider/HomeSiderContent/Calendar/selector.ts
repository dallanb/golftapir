import { createSelector } from 'reselect';

const getHomePageSiderContentCalendar = (state: any) =>
    state.homePage.ui.sider.content.calendar;

export const selectData = createSelector(
    [getHomePageSiderContentCalendar],
    (calendar) => calendar
);
