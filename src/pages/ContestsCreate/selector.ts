import { createSelector } from 'reselect';
import _ from 'lodash';

const getContestsCreatePage = (state: any) => state.contestsCreatePage;

export const selectCreateFormSearchParticipants = createSelector(
    [getContestsCreatePage],
    (contestsCreatePage) =>
        _.get(contestsCreatePage, ['createFormSearchParticipants'], [])
);
