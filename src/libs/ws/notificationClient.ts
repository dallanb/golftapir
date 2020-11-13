import Client from './client';
import config from 'config';

class NotificationClient extends Client {
    constructor() {
        super(config.WS_NOTIFICATION_URL);
    }
}

export default new NotificationClient();
