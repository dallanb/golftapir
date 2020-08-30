import ClientProxy from './ClientProxy';
import { getFormData } from './utils';
import config from '../config.json';

export default {
    login(data: { email: string; password: string }) {
        const formData = getFormData(data);
        return ClientProxy.post({
            url: config.AUTH_URL,
            endpoint: `/login`,
            data: formData,
            headers: {},
        });
    },
};
