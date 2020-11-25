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
        prefix: 'COMPETITOR_PAGE_SIDER_HEADER_',
    }
);
export const CompetitorPageSiderHeaderTypes = Types;
export default Creators;
