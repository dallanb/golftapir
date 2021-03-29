import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPageSiderCourse = (state: any) =>
    state.contestPage.ui.sider.course;

export const selectData = createSelector(
    [getContestPageSiderCourse],
    (contestPageSiderCourse) => contestPageSiderCourse
);

export const selectCourseData = createSelector(
    [getContestPageSiderCourse],
    (contestPageSiderCourse) =>
        _get(contestPageSiderCourse, ['data'], undefined)
);
