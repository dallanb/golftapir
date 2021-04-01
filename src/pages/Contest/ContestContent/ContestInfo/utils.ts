import { get as _get, pick as _pick } from 'lodash';
import { formatTimeStamp } from '@pages/Contest/utils';
import {roundToMoney} from "@utils";

export const prepareInitialValues = (contestData: any, payoutData: any) => {
    const start = _get(contestData, ['start_time'], null);
    const totalPayouts = _get(payoutData, ['total_payout'], 'NA');
    const buyIn = _get(payoutData, ['buy_in'], 'NA');
    return {
        ..._pick(contestData, ['uuid', 'name', 'avatar', 'status']),
        start: formatTimeStamp(start),
        payout:
            totalPayouts === 'NA'
                ? totalPayouts
                : `$${roundToMoney(totalPayouts)}`,
        buyIn: buyIn == 'NA' ? buyIn : `$${roundToMoney(buyIn)}`,
    };
};
