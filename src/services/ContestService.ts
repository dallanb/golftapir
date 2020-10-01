import ClientProxy from './ClientProxy';
import config from 'config';

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
    createContest(data: any = {}) {
        return ClientProxy.post({
            url: config.CONTEST_URL,
            endpoint: `/contests`,
            data,
        });
    },
    updateContestParticipant(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.CONTEST_URL,
            endpoint: `/participants/${uuid}`,
            data,
        });
    },
};
