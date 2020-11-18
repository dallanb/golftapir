import ClientProxy from './ClientProxy';
import config from 'config';

export default {
    fetchScore(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.SCORE_URL,
            endpoint: `/scores/${uuid}`,
            query,
        });
    },
    fetchScoreContest(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.SCORE_URL,
            endpoint: `/scores/contest/${uuid}`,
            query,
        });
    },
    fetchScoreContestParticipantSheet(
        uuid: string,
        user_uuid: string,
        query: any = {}
    ) {
        return ClientProxy.get({
            url: config.SCORE_URL,
            endpoint: `/scores/contest/${uuid}/sheets/${user_uuid}`,
            query,
        });
    },
    updateScore(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.SCORE_URL,
            endpoint: `/scores/${uuid}`,
            data,
        });
    },
    updateSheet(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.SCORE_URL,
            endpoint: `/scores/sheets/${uuid}`,
            data,
        });
    },
    updateHole(sheet_uuid: string, hole_id: string, data: any = {}) {
        return ClientProxy.put({
            url: config.SCORE_URL,
            endpoint: `/scores/sheets/${sheet_uuid}/holes/${hole_id}`,
            data,
        });
    },
};
