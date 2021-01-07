import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderContentCourse = (state: any) =>
    state.contestPage.ui.sider.content.course;

export const selectData = createSelector(
    [getContestPageSiderContentCourse],
    (contestPageSiderContentCourse) => contestPageSiderContentCourse
);

export const selectCourseData = createSelector(
    [getContestPageSiderContentCourse],
    (contestPageSiderContentCourse) =>
        _get(contestPageSiderContentCourse, ['data'], undefined)
);
