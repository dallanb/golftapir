import Client from './client';
import config from 'config';

class LeagueTopicClient extends Client {
    constructor() {
        super(config.WS_TOPIC_URL);
    }
}

export default new LeagueTopicClient();
