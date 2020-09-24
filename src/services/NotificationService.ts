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
};
