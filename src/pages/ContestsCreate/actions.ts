import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'CONTESTS_CREATE_PAGE_',
    }
);
export const ContestsCreatePageTypes = Types;
export default Creators;
