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
        prefix: 'LEAGUES_CREATE_PAGE_',
    }
);
export const LeaguesCreatePageTypes = Types;
export default Creators;
