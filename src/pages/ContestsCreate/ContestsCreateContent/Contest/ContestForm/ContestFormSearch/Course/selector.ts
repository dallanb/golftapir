import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestsCreatePageContentContestSearchCourse = (state: any) =>
    state.contestsCreatePage.ui.content.contest.search.course;

export const selectData = createSelector(
    [getContestsCreatePageContentContestSearchCourse],
    (contestsCreatePageContentContestSearchCourse) =>
        contestsCreatePageContentContestSearchCourse
);

export const selectSearchData = createSelector(
    [getContestsCreatePageContentContestSearchCourse],
    (contestsCreatePageContentContestSearchCourse) =>
        _get(contestsCreatePageContentContestSearchCourse, ['data'], undefined)
);
