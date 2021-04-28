import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: [],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        terminateSuccess: null,
        terminateFailure: ['err'],
        refresh: ['uuid'],
        refreshSuccess: null,
        refreshFailure: ['err'],
        set: ['data'],
    },
    {
        prefix: 'CONTEST_MODULE_',
    }
);
export const ContestModuleTypes = Types;
export default Creators;
