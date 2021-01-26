import { get as _get, pick as _pick } from 'lodash';
import { formatTimeStamp } from '@utils';

export const prepareInitialValues = (contestData: any, payoutData: any) => {
    const ctime = _get(contestData, ['ctime'], null);
    const totalPayouts = _get(payoutData, ['total_payout'], 'NA');
    return {
        ..._pick(contestData, ['uuid', 'name', 'avatar', 'status']),
        ctime: formatTimeStamp(ctime),
        payout: totalPayouts === 'NA' ? totalPayouts : `$${totalPayouts}`,
    };
};
