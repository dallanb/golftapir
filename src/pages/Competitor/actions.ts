import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'COMPETITOR_PAGE_',
    }
);
export const CompetitorPageTypes = Types;
export default Creators;
