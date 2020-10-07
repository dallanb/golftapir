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
        prefix: 'HOME_PAGE_',
    }
);
export const HomePageTypes = Types;
export default Creators;
