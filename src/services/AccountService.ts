import ClientProxy from './ClientProxy';
import config from 'Config';

export default {
    fetchAccount(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts/${uuid}`,
            query,
        });
    },
    fetchAccountMembership(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts/membership/${uuid}`,
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
};
