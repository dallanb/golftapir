import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['data', 'options'],
        initSuccess: null,
        initFailure: ['err'],
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
