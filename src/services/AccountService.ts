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
};
