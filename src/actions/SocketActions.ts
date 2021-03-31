import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['ws', 'data', 'options'],
        initSuccess: null,
        initFailure: ['err'],
        terminate: ['ws'],
        terminateSuccess: null,
        terminateFailure: ['err'],
        write: ['ws', 'data'],
        writeSuccess: null,
        writeFailure: ['err'],
    },
    {
        prefix: 'SOCKET_',
    }
);
export const SocketTypes = Types;
export default Creators;
