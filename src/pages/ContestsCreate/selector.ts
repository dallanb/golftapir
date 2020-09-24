import { createSelector } from 'reselect';
import {get as _get} from 'lodash';

const getContestsCreatePage = (state: any) => state.contestsCreatePage;

export const selectCreateFormSearchParticipants = createSelector(
    [getContestsCreatePage],
    (contestsCreatePage) =>
        _get(contestsCreatePage, ['createFormSearchParticipants'], [])
);
