import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        preInit: ['data'],
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        terminateSuccess: null,
        terminateFailure: ['err'],
        refresh: ['uuid'],
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
        setUUID: ['uuid'],
        updateContestName: ['data'],
        updateContestNameSuccess: ['name'],
        updateContestNameFailure: ['err'],
        updateContestAvatar: ['data'],
        updateContestAvatarSuccess: ['avatar'],
        updateContestAvatarFailure: ['err'],
        updateContestStartTime: ['data'],
        updateContestStartTimeSuccess: ['start_time'],
        updateContestStartTimeFailure: ['err'],
        updateContestParticipantScore: ['participant', 'strokes', 'score'],
    },
    {
        prefix: 'CONTEST_MODULE_',
    }
);
export const ContestModuleTypes = Types;
export default Creators;
