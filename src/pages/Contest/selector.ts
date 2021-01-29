import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getContestPage = (state: any) => state.contestPage.data;
const getBase = (state: any) => state.base;

export const selectData = createSelector(
    [getContestPage],
    (contestPage) => contestPage
);

export const selectIsInitialized = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['isInitialized'], false)
);

export const selectMembersHash = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['membersHash'], {})
);

export const selectContest = createSelector([getContestPage], (contestPage) =>
    _get(contestPage, ['contest'], {})
);

export const selectContestUUID = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'uuid'], null)
);

export const selectContestName = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'name'], undefined)
);

export const selectContestAvatarSrc = createSelector(
    [getContestPage],
    (contestPage) => {
        const filename = _get(contestPage, ['contest', 'avatar'], undefined);
        return (
            filename && withS3URL(filename, constants.S3_FOLDERS.CONTEST.AVATAR)
        );
    }
);

export const selectContestStartTime = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'start_time'], undefined)
);

export const selectContestStatus = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'status'], undefined)
);

export const selectContestParticipants = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['contest', 'participants'], undefined)
);

export const selectIsOwner = createSelector(
    [getContestPage, getBase],
    (contestPage, base) =>
        _get(contestPage, ['contest', 'owner'], undefined) ===
        _get(base, ['me', 'data', 'user_uuid'], undefined)
);

export const selectIsRefreshing = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['isRefreshing'], false)
);

export const selectSubscribed = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['subscribed'], false)
);

export const selectSheet = createSelector([getContestPage], (contestPage) =>
    _get(contestPage, ['sheet'], undefined)
);

export const selectMyParticipant = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['participant'], undefined)
);

export const selectMyParticipantStatus = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['participant', 'status'], undefined)
);

export const selectPayout = createSelector([getContestPage], (contestPage) =>
    _get(contestPage, ['payout'], undefined)
);

export const selectPayoutData = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['payout', 'data'], undefined)
);

export const selectPayoutIsFetching = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['payout', 'isFetching'], undefined)
);

export const selectPayoutBuyIn = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['payout', 'data', 'buy_in'], undefined)
);

export const selectPayoutProportions = createSelector(
    [getContestPage],
    (contestPage) =>
        _get(contestPage, ['payout', 'data', 'payout_proportions'], undefined)
);
