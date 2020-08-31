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
    register(data: { email: string; username: string; password: string }) {
        return ClientProxy.post({
            url: config.AUTH_URL,
            endpoint: `/register`,
            data: data,
            headers: {},
        });
    },
};
