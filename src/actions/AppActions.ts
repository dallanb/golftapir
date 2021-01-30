import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        refresh: ['uuid'],
        refreshSuccess: null,
        refreshFailure: ['err'],
    },
    {
        prefix: 'APP_',
    }
);
export const AppTypes = Types;
export default Creators;
