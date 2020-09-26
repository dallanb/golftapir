import ClientProxy from './ClientProxy';
import config from 'config';

export default {
    setToken(data: any = {}) {
        return ClientProxy.post({
            url: config.NOTIFICATION_URL,
            endpoint: `/tokens`,
            data,
        });
    },
    fetchNotifications(query: any = {}) {
        return ClientProxy.get({
            url: config.NOTIFICATION_URL,
            endpoint: `/notifications`,
            query,
        });
    },
    updateNotification(id: string, data: any = {}) {
        return ClientProxy.put({
            url: config.NOTIFICATION_URL,
            endpoint: `/notifications/${id}`,
            data,
        });
    },
};
