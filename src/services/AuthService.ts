import ClientProxy from './ClientProxy';
import config from '../config.json';

export default {
    login(data: { email: string; password: string }) {
        return ClientProxy.post({
            url: config.AUTH_URL,
            endpoint: `/login`,
            data: data,
            headers: {},
        });
    },
};
