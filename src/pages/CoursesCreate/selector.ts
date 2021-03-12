import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getCoursesCreatePage = (state: any) => state.coursesCreatePage.data;

export const selectData = createSelector(
    [getCoursesCreatePage],
    (coursesCreatePage) => coursesCreatePage
);
