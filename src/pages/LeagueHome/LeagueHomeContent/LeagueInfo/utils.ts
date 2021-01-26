import { get as _get, pick as _pick } from 'lodash';
import { formatTimeStamp } from '@utils';

export const prepareInitialValues = (leagueData: any) => {
    const ctime = _get(leagueData, ['ctime'], null);
    return {
        ..._pick(leagueData, ['uuid', 'name', 'avatar', 'status']),
        ctime: formatTimeStamp(ctime),
    };
};
