import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        preInit: ['data'],
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
    },
    {
        prefix: 'LEAGUE_PAGE_',
    }
);
export const LeaguePageTypes = Types;
export default Creators;
