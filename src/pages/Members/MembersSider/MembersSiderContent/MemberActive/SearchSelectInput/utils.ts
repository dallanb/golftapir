import constants from '@constants';
import config from 'config';

// return False if we are at or past member limit else True
export const checkMemberLimit = (membersData: any) =>
    Object.entries(membersData).reduce(
        (total: number, [k, v]: any) =>
            k !== constants.STATUS.INACTIVE ? total + v.length : total,
        0
    ) >= config.MAX_LEAGUE_MEMBERS;
