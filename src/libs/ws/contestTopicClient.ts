import Client from './client';
import config from 'config';

class ContestTopicClient extends Client {
    constructor(options?: {
        reconnectHandler: () => void;
        errorHandler: (code: number) => void;
    }) {
        super(config.WS_NOTIFICATION_URL, options);
    }
}

export default ContestTopicClient;
