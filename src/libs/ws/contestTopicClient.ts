import Client from './client';
import config from 'config';

class ContestTopicClient extends Client {
    constructor() {
        super(config.WS_TOPIC_URL);
    }
}

export default new ContestTopicClient();
