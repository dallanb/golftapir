import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        fetchData: ['options', 'append'], // at the moment the passed in parameters are being ignored
        fetchDataSuccess: ['data', 'metadata'],
        fetchDataFailure: ['err'],
    },
    {
        prefix: 'COMPETITOR_PAGE_CONTENT_COMPETITOR_RESULTS_',
    }
);
export const CompetitorPageContentCompetitorResultsTypes = Types;
export default Creators;
