import ClientProxy from './ClientProxy';
import config from 'Config';

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
    fetchContestsComplete(uuid: string) {
        return ClientProxy.get({
            url: config.WAGER_URL,
            endpoint: `/contests/${uuid}/complete`,
        });
    },
};
