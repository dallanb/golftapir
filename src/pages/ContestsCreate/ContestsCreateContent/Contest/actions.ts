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
        prefix: 'CONTESTS_CREATE_PAGE_CONTENT_CONTEST_',
    }
);
export const ContestsCreatePageContentContestTypes = Types;
export default Creators;
