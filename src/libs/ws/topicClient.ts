import Client from './client';
import config from 'config';

class TopicClient extends Client {
    constructor() {
        super(config.WS_TOPIC_URL);
    }
}

export default new TopicClient();
