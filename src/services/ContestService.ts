import ClientProxy from './ClientProxy';
import config from '../config.json';

export default {
    fetchContest(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.CONTEST_URL,
            endpoint: `/contest/${uuid}`,
            query,
        });
    },
};
