import { createSelector } from 'reselect';
import { get as _get } from 'lodash';

const getContestPage = (state: any) => state.contestPage.data;
const getContestModule = (state: any) => state.contestModule;
const getApp = (state: any) => state.app;

export const selectData = createSelector(
    [getContestPage],
    contestPage => contestPage
);

export const selectIsInitialized = createSelector(
    [getContestPage],
    contestPage => _get(contestPage, ['isInitialized'], false)
);

export const selectIsOwner = createSelector(
    [getContestModule, getApp],
    (contestModule, app) =>
        _get(contestModule, ['contest', 'owner'], undefined) ===
        _get(app, ['leagueMember', 'data', 'user'], undefined)
);

export const selectIsRefreshing = createSelector(
    [getContestPage],
    contestPage => _get(contestPage, ['isRefreshing'], false)
);

export const selectSubscribed = createSelector([getContestPage], contestPage =>
    _get(contestPage, ['subscribed'], false)
);

export const selectSheet = createSelector([getContestPage], contestPage =>
    _get(contestPage, ['sheet'], undefined)
);

export const selectPayout = createSelector([getContestPage], contestPage =>
    _get(contestPage, ['payout'], undefined)
);

export const selectPayoutData = createSelector([getContestPage], contestPage =>
    _get(contestPage, ['payout', 'data'], undefined)
);

export const selectPayoutIsFetching = createSelector(
    [getContestPage],
    contestPage => _get(contestPage, ['payout', 'isFetching'], undefined)
);

export const selectPayoutBuyIn = createSelector([getContestPage], contestPage =>
    _get(contestPage, ['payout', 'data', 'buy_in'], undefined)
);

export const selectPayoutProportions = createSelector(
    [getContestPage],
    contestPage =>
        _get(contestPage, ['payout', 'data', 'payout_proportions'], undefined)
);
