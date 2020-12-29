import ClientProxy from './ClientProxy';
import config from 'config';
import { getFormData } from './utils';

export default {
    fetchLeague(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.LEAGUE_URL,
            endpoint: `/leagues/${uuid}`,
            query,
        });
    },
    fetchLeagues(query: any = {}) {
        return ClientProxy.get({
            url: config.LEAGUE_URL,
            endpoint: `/leagues`,
            query,
        });
    },
    createLeague(data: any = {}) {
        return ClientProxy.post({
            url: config.LEAGUE_URL,
            endpoint: `/leagues`,
            data,
        });
    },
    assignAvatar(uuid: string, avatar: any = {}) {
        const formData = getFormData({ avatar });

        return ClientProxy.post({
            url: config.LEAGUE_URL,
            endpoint: `/leagues/${uuid}/avatars`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    updateLeague(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.LEAGUE_URL,
            endpoint: `/leagues/${uuid}`,
            data,
        });
    },
};