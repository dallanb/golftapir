import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        setUUID: ['uuid'],
        setInitialValues: ['initialValues'],
        submit: ['data'],
        submitSuccess: null,
        submitFailure: ['err'],
    },
    {
        prefix: 'CONTEST_UPDATE_PAGE_CONTENT_CONTEST_',
    }
);
export const ContestUpdatePageContentContestTypes = Types;
export default Creators;
