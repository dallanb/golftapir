import { get as _get, pick as _pick } from 'lodash';
import { formatTimeStamp } from '@utils';

export const prepareInitialValues = (statsData: any) => {
    const winCount = _get(statsData, ['win_count'], 0);
    const winningsTotal = _get(statsData, ['winning_total'], 0);
    const eventCount = _get(statsData, ['event_count'], 0);

    return {
        wins: winCount,
        winnings: winningsTotal,
        win_percentage: isNaN(winCount / eventCount)
            ? 'NA'
            : (winCount / eventCount) * 100,
    };
};
