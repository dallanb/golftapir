import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        updateContestStatus: ['uuid', 'status'],
        updateContestStatusSuccess: ['status'],
        updateContestStatusFailure: ['err'],
        updateContestParticipantStatus: ['uuid', 'status'],
        updateContestParticipantStatusSuccess: ['uuid', 'status'],
        updateContestParticipantStatusFailure: ['err'],
    },
    {
        prefix: 'CONTEST_PAGE_',
    }
);
export const ContestPageTypes = Types;
export default Creators;
