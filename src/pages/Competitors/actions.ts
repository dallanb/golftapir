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
        prefix: 'COMPETITORS_PAGE_',
    }
);
export const CompetitorsPageTypes = Types;
export default Creators;
