import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        fetchData: ['options', 'append'],
        fetchDataSuccess: ['data', 'metadata'],
        fetchDataFailure: ['err'],
    },
    {
        prefix: 'CONTESTS_PAGE_CONTENT_CONTESTS_',
    }
);
export const ContestsPageContentContestsTypes = Types;
export default Creators;
