import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setInitialValues: ['initialValues'],
        setResult: ['result'],
        submit: ['data'],
        submitSuccess: null,
        submitFailure: ['err'],
    },
    {
        prefix: 'LEAGUES_CREATE_PAGE_CONTENT_LEAGUE_',
    }
);
export const LeaguesCreatePageContentLeagueTypes = Types;
export default Creators;
