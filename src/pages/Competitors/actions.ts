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
        prefix: 'COMPETITORS_PAGE_',
    }
);
export const CompetitorsPageTypes = Types;
export default Creators;
