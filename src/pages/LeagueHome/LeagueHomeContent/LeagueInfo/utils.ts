import { get as _get, pick as _pick } from 'lodash';
import moment from 'moment';

export const prepareInitialValues = (leagueData: any) => {
    const ctime = _get(leagueData, ['ctime'], null);
    return {
        ..._pick(leagueData, ['uuid', 'name', 'avatar', 'status']),
        ctime: formatTimeStamp(ctime),
    };
};

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('LL') : 'NA';
