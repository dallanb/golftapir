import ClientProxy from './ClientProxy';
import config from 'config';
import { getFormData } from './utils';

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
        const formData = getFormData({ avatar });

        return ClientProxy.post({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts/${uuid}/avatars`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    searchAccounts(query: any = {}) {
        return ClientProxy.get({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts/search`,
            query,
        });
    },
    bulkFetchAccounts(data: any, query: any = {}) {
        console.log(data);
        console.log(query);
        return ClientProxy.post({
            url: config.ACCOUNT_URL,
            endpoint: `/accounts/bulk`,
            data,
            query,
        });
    },
};
