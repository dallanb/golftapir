import memoize from 'memoize-one';
import { get as _get } from 'lodash';

export const formatPayoutProportions = memoize((payout) => {
    const proportions = _get(payout, ['payout_proportions'], {});
    const partyPayouts = _get(payout, ['party_payputs'], {});
    return Object.entries(proportions).map(([k, v]: any) => {
        return {
            rank: k,
            proportion: v,
            payout: _get(partyPayouts, [k], 0),
        };
    });
});
