import { get as _get } from 'lodash';

export const filterLeaguesByNotification = (
    notification: any,
    leagues: any[]
): { league: any; member: any } | undefined => {
    const leagueUUID = _get(notification, ['properties', 'league_uuid']);
    return leagues.find(({ league }): any => league.uuid === leagueUUID);
};
