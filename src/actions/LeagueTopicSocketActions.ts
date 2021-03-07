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
        prefix: 'LEAGUE_TOPIC_SOCKET_',
    }
);
export const LeagueTopicSocketTypes = Types;
export default Creators;
