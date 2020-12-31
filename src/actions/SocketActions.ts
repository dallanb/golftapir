import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['uuid', 'options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        terminateSuccess: null,
        terminateFailure: ['err'],
        write: ['data'],
        writeSuccess: null,
        writeFailure: ['err'],
    },
    {
        prefix: 'SOCKET_',
    }
);
export const SocketTypes = Types;
export default Creators;
