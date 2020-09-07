import ClientProxy from './ClientProxy';
import config from '../config.json';

export default {
    fetchAccount(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts/${uuid}`,
            query,
        });
    },
    fetchAccounts(query: any = {}) {
        return ClientProxy.get({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts`,
            query,
        });
    },
    updateAccount(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts/${uuid}`,
            data,
        });
    },
    updateAvatar(uuid: string, avatar: any = {}) {
        return ClientProxy.put({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts/${uuid}/avatars`,
            data: avatar,
        });
    },
};
