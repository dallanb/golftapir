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
        setAvatar: ['avatar'],
        setName: ['name'],
        setStartTime: ['start_time'],
        updateContestParticipantScore: ['participant', 'strokes', 'score'],
    },
    {
        prefix: 'CONTEST_MODULE_',
    }
);
export const ContestModuleTypes = Types;
export default Creators;
