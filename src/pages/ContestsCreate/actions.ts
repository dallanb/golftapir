import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        createContest: ['data'],
        createContestSuccess: ['data'],
        createContestFailure: ['err'],
        searchParticipants: ['key'],
        searchParticipantsSuccess: ['data'],
        searchParticipantsFailure: ['err'],
    },
    {
        prefix: 'CONTESTS_CREATE_PAGE_',
    }
);
export const ContestsCreatePageTypes = Types;
export default Creators;
