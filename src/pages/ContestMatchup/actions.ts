import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['contest'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'CONTEST_MATCHUP_PAGE_',
    }
);
export const ContestMatchupPageTypes = Types;
export default Creators;
