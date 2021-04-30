import { createSelector } from 'reselect';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

const getContestModule = (state: any) => state.contestModule;

export const selectData = createSelector(
    [getContestModule],
    contestModule => contestModule
);

export const selectIsInitialized = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['isInitialized'], false)
);

export const selectIsRefreshing = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['isRefreshing'], false)
);

export const selectIsTerminating = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['isTerminating'], false)
);

export const selectUUID = createSelector([getContestModule], contestModule =>
    _get(contestModule, ['uuid'], undefined)
);

export const selectContest = createSelector([getContestModule], contestModule =>
    _get(contestModule, ['contest'], {})
);

export const selectContestUUID = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['contest', 'uuid'], null)
);

export const selectContestName = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['contest', 'name'], undefined)
);

export const selectContestAvatarSrc = createSelector(
    [getContestModule],
    contestModule => {
        const filename = _get(contestModule, ['contest', 'avatar'], undefined);
        return (
            filename && withS3URL(filename, constants.S3_FOLDERS.CONTEST.AVATAR)
        );
    }
);

export const selectContestStartTime = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['contest', 'start_time'], undefined)
);

export const selectContestStatus = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['contest', 'status'], undefined)
);

export const selectIsContestUpdating = createSelector(
    [getContestModule],
    contestModule =>
        _get(contestModule, ['isContestNameUpdating'], false) ||
        _get(contestModule, ['isContestAvatarUpdating'], false) ||
        _get(contestModule, ['isContestStartTimeUpdating'], false)
);

export const selectContestParticipants = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['contest', 'participants'], undefined)
);

export const selectMyParticipant = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['participant'], undefined)
);

export const selectMyParticipantStatus = createSelector(
    [getContestModule],
    contestModule => _get(contestModule, ['participant', 'status'], undefined)
);
