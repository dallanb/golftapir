import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setHeader: ['data'],
        setAvatar: ['data'],
    },
    {
        prefix: 'COMPETITOR_PAGE_HEADER_',
    }
);
export const CompetitorPageHeaderTypes = Types;
export default Creators;
