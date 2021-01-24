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
    fetchMemberLeagues(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.LEAGUE_URL,
            endpoint: `/members/${uuid}/leagues`,
            query,
        });
    },
    fetchUserMemberLeagues(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.LEAGUE_URL,
            endpoint: `/members/leagues/user/${uuid}`,
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
    fetchLeagueMembers(uuid: string, query: any = {}) {
        return ClientProxy.get({
            url: config.LEAGUE_URL,
            endpoint: `/leagues/${uuid}/members`,
            query,
        });
    },
    fetchMembers(query: any = {}) {
        return ClientProxy.get({
            url: config.LEAGUE_URL,
            endpoint: `/members`,
            query,
        });
    },
    fetchMembersMaterialized(query: any = {}) {
        return ClientProxy.get({
            url: config.LEAGUE_URL,
            endpoint: `/members/materialized`,
            query,
        });
    },
    createMember(uuid: string, data: any = {}) {
        return ClientProxy.post({
            url: config.LEAGUE_URL,
            endpoint: `/leagues/${uuid}/members`,
            data,
        });
    },
    updateMember(uuid: string, data: any = {}) {
        return ClientProxy.put({
            url: config.LEAGUE_URL,
            endpoint: `/members/${uuid}`,
            data,
        });
    },
};
