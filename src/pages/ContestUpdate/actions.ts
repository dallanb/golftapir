import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['data'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        updateContest: ['uuid', 'data'],
        updateContestSuccess: ['data'],
        updateContestFailure: ['err'],
    },
    {
        prefix: 'CONTEST_UPDATE_PAGE_',
    }
);
export const ContestUpdatePageTypes = Types;
export default Creators;
