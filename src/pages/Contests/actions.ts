import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'CONTESTS_PAGE_',
    }
);
export const ContestsPageTypes = Types;
export default Creators;
