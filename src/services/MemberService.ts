import ClientProxy from './ClientProxy';
import config from 'config';
import { getFormData } from './utils';

export default {
    fetchMembers(query: any = {}) {
        return ClientProxy.get({
            url: config.MEMBER_URL,
            endpoint: `/members`,
            query,
        });
    },
    fetchMember(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.MEMBER_URL,
            endpoint: `/members/${uuid}`,
            query,
        });
    },
    fetchMemberUser(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.MEMBER_URL,
            endpoint: `/members/user/${uuid}`,
            query,
        });
    },
    updateMember(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.MEMBER_URL,
            endpoint: `/members/${uuid}`,
            data,
        });
    },
    fetchMemberStandings(query: any = {}) {
        return ClientProxy.get({
            url: config.MEMBER_URL,
            endpoint: `/members/standings`,
            query,
        });
    },
    bulkFetchMembers(data: any, query: any = {}) {
        return ClientProxy.post({
            url: config.MEMBER_URL,
            endpoint: `/members/bulk`,
            data,
            query,
        });
    },
    assignAvatar(uuid: string, avatar: any = {}) {
        const formData = getFormData({ avatar });

        return ClientProxy.post({
            url: config.MEMBER_URL,
            endpoint: `/members/${uuid}/avatars`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    fetchStats(query: any = {}) {
        return ClientProxy.get({
            url: config.MEMBER_URL,
            endpoint: `/stats`,
            query,
        });
    },
    fetchStat(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.MEMBER_URL,
            endpoint: `/stats/${uuid}`,
            query,
        });
    },
    inviteMember(data: any, query: any = {}) {
        return ClientProxy.post({
            url: config.MEMBER_URL,
            endpoint: '/members/invite',
            data,
            query,
        });
    },
};
