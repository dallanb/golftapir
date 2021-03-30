import Client from './client';
import config from 'config';

class NotificationClient extends Client {
    constructor(options?: {
        reconnectHandler: () => void;
        errorHandler: (code: number) => void;
    }) {
        super(config.WS_NOTIFICATION_URL, options);
    }
}

export default NotificationClient;
