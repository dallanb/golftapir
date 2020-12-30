import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        preInit: ['data'],
        init: ['uuid'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        refresh: ['uuid'],
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
    },
    {
        prefix: 'BASE_',
    }
);
export const BaseTypes = Types;
export default Creators;
