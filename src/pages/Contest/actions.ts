import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        refresh: null,
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
        updateContestStatus: ['uuid', 'status'],
        updateContestStatusSuccess: ['status'],
        updateContestStatusFailure: ['err'],
        updateContestParticipantStatus: ['uuid', 'status'],
        updateContestParticipantStatusSuccess: ['uuid', 'status'],
        updateContestParticipantStatusFailure: ['err'],
        subscribe: ['uuid'],
        subscribeSuccess: null,
        subscribeFailure: ['err'],
        unsubscribe: ['uuid'],
        unsubscribeSuccess: null,
        unsubscribeFailure: ['err'],
    },
    {
        prefix: 'CONTEST_PAGE_',
    }
);
export const ContestPageTypes = Types;
export default Creators;
