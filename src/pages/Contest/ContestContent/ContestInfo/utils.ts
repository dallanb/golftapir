import { get as _get, pick as _pick } from 'lodash';
import { formatTimeStamp } from '@pages/Contest/utils';

export const prepareInitialValues = (contestData: any, payoutData: any) => {
    const start = _get(contestData, ['start_time'], null);
    const totalPayouts = _get(payoutData, ['total_payout'], 'NA');
    const buyIn = _get(payoutData, ['buy_in'], 'NA');
    console.log(payoutData);
    return {
        ..._pick(contestData, ['uuid', 'name', 'avatar', 'status']),
        start: formatTimeStamp(start),
        payout: totalPayouts === 'NA' ? totalPayouts : `$${totalPayouts}`,
        buyIn: buyIn == 'NA' ? buyIn : `$${buyIn}`,
    };
};
