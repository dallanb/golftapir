import ClientProxy from './ClientProxy';
import config from 'Config';

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
    fetchPending() {
        return ClientProxy.get({
            url: config.NOTIFICATION_URL,
            endpoint: `/notifications/pending`,
        });
    },
    updateNotification(id: string, data: any = {}) {
        return ClientProxy.put({
            url: config.NOTIFICATION_URL,
            endpoint: `/notifications/${id}`,
            data,
        });
    },
    subscriptionExists(query: any = {}) {
        return ClientProxy.get({
            url: config.NOTIFICATION_URL,
            endpoint: `/subscriptions`,
            query,
        });
    },
    subscribe(data: any = {}) {
        return ClientProxy.post({
            url: config.NOTIFICATION_URL,
            endpoint: `/subscriptions/subscribe`,
            data,
        });
    },
    unsubscribe(data: any = {}) {
        return ClientProxy.del({
            url: config.NOTIFICATION_URL,
            endpoint: `/subscriptions/unsubscribe`,
            data,
        });
    },
};
