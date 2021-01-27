import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        preInit: ['data'],
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        refresh: null,
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
        subscribe: ['uuid'],
        subscribeSuccess: null,
        subscribeFailure: ['err'],
        unsubscribe: ['uuid'],
        unsubscribeSuccess: null,
        unsubscribeFailure: ['err'],
        updateContestParticipantStatus: ['uuid', 'status'],
        updateContestParticipantStatusSuccess: ['uuid', 'status'],
        updateContestParticipantStatusFailure: ['err'],
        updateContestParticipantScore: ['participant', 'strokes', 'score'],
        fetchPayout: ['uuid'],
        fetchPayoutSuccess: ['payout'],
        fetchPayoutFailure: ['err'],
    },
    {
        prefix: 'CONTEST_PAGE_',
    }
);
export const ContestPageTypes = Types;
export default Creators;
