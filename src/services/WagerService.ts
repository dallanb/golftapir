import ClientProxy from './ClientProxy';
import config from 'config';

export default {
    fetchWager(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.WAGER_URL,
            endpoint: `/wagers/${uuid}`,
            query,
        });
    },
    fetchWagers(query: any = {}) {
        return ClientProxy.get({
            url: config.WAGER_URL,
            endpoint: `/wagers`,
            query,
        });
    },
};
