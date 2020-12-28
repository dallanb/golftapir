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
    updateLeague(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.LEAGUE_URL,
            endpoint: `/leagues/${uuid}`,
            data,
        });
    },
};
