import { createSelector } from 'reselect';

const getHomePageSiderContentCalendar = (state: any) =>
    state.homePage.data.sider.content.calendar;

export const selectData = createSelector(
    [getHomePageSiderContentCalendar],
    (calendar) => calendar
);
