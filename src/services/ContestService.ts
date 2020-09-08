import ClientProxy from './ClientProxy';
import config from '../config.json';

export default {
    fetchContest(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.CONTEST_URL,
            endpoint: `/contests/${uuid}`,
            query,
        });
    },
    fetchContests(query: any = {}) {
        return ClientProxy.get({
            url: config.CONTEST_URL,
            endpoint: `/contests`,
            query,
        });
    },
};
