import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data']
    },
    {
        prefix: 'CONTEST_PAGE_',
    }
);
export const ContestPageTypes = Types;
export default Creators;
