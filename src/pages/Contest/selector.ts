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

export const selectAccountsHash = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['accountsHash'], {})
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
        const filename = _get(
            contestPage,
            ['contest', 'avatar', 's3_filename'],
            undefined
        );
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
        _get(base, ['me', 'membership_uuid'], undefined)
);

export const selectIsFetching = createSelector(
    [getContestPage],
    (contestPage) => _get(contestPage, ['isFetching'], true)
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
