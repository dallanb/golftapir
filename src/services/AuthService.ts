import ClientProxy from './ClientProxy';
import config from 'config';

export default {
    ping() {
        return ClientProxy.get({
            url: config.AUTH_URL,
            endpoint: `/ping`,
        });
    },
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
    refresh() {
        return ClientProxy.get({
            url: config.AUTH_URL,
            endpoint: `/refresh`,
        });
    },
    logout() {
        return ClientProxy.post({
            url: config.AUTH_URL,
            endpoint: `/logout`,
            data: {},
            headers: {},
        });
    },
};
