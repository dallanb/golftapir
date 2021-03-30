import Client from './client';
import config from 'config';
import { notification } from 'antd';

class NotificationClient extends Client {
    constructor(options?: { errorHandler: (code: number) => void }) {
        super(config.WS_NOTIFICATION_URL, options);
    }
}

export default NotificationClient;
