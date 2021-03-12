import { createSelector } from 'reselect';

const getCoursesCreatePageContentCourse = (state: any) =>
    state.coursesCreatePage.ui.content.course;

export const selectData = createSelector(
    [getCoursesCreatePageContentCourse],
    (coursesCreatePageContentCourse) => coursesCreatePageContentCourse
);
