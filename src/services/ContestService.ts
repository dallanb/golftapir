import ClientProxy from './ClientProxy';
import config from 'Config';
import { getFormData } from '@services/utils';

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
    fetchContestsMaterialized(query: any = {}) {
        return ClientProxy.get({
            url: config.CONTEST_URL,
            endpoint: `/contests/materialized`,
            query,
        });
    },
    fetchContestMaterialized(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.CONTEST_URL,
            endpoint: `/contests/materialized/${uuid}`,
            query,
        });
    },
    fetchContestsCalendar(query: any = {}) {
        return ClientProxy.get({
            url: config.CONTEST_URL,
            endpoint: `/contests/calendar`,
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
    updateContest(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.CONTEST_URL,
            endpoint: `/contests/${uuid}`,
            data,
        });
    },
    assignAvatar(uuid: string, avatar: any = {}) {
        const formData = getFormData({ avatar });

        return ClientProxy.post({
            url: config.CONTEST_URL,
            endpoint: `/contests/${uuid}/avatars`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    fetchContestParticipants(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.CONTEST_URL,
            endpoint: `/contests/${uuid}/participants`,
            query,
        });
    },
    fetchContestParticipantMember(contest_uuid: string, member_uuid: string) {
        return ClientProxy.get({
            url: config.CONTEST_URL,
            endpoint: `/contests/${contest_uuid}/participants/member/${member_uuid}`,
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
