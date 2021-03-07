import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: ['data', 'options'],
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
        prefix: 'CONTEST_TOPIC_SOCKET_',
    }
);
export const ContestTopicSocketTypes = Types;
export default Creators;
