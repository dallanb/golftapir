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
        prefix: 'COMPETITORS_PAGE_CONTENT_COMPETITORS_',
    }
);
export const CompetitorsPageContentCompetitorsTypes = Types;
export default Creators;
