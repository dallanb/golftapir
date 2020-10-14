import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        updateContest: ['uuid', 'data'],
        updateContestSuccess: ['data'],
        updateContestFailure: ['err'],
    },
    {
        prefix: 'CONTESTS_UPDATE_PAGE_',
    }
);
export const ContestsUpdatePageTypes = Types;
export default Creators;
