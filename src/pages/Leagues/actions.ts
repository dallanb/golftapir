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
        prefix: 'LEAGUES_PAGE_',
    }
);
export const LeaguesPageTypes = Types;
export default Creators;
