import ClientProxy from './ClientProxy';
import config from '../config.json';
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
};
