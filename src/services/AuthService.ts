import ClientProxy from './ClientProxy';
import config from 'Config';

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
    register(data: {
        email: string;
        username: string;
        password: string;
        display_name: string;
        country: string;
        token?: string;
    }) {
        return ClientProxy.post({
            url: config.AUTH_URL,
            endpoint: `/register`,
            data: data,
            headers: {},
        });
    },
    verify(data: { token: string }) {
        return ClientProxy.post({
            url: config.AUTH_URL,
            endpoint: `/verify`,
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
    fetchInvite(token: string) {
        return ClientProxy.get({
            url: config.AUTH_URL,
            endpoint: `/invites/token/${token}`,
        });
    },
    forgotPassword(data: { email: string }) {
        return ClientProxy.post({
            url: config.AUTH_URL,
            endpoint: `/forgot_password`,
            data,
        });
    },
    resetPassword(data: { password: string; token: string }) {
        return ClientProxy.post({
            url: config.AUTH_URL,
            endpoint: `/reset_password`,
            data,
        });
    },
};
