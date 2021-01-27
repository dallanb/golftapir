import memoize from 'memoize-one';
import { get as _get } from 'lodash';

export const formatPayoutProportions = memoize(
    ({ payout_proportions: proportions, party_payouts: partyPayouts }) =>
        Object.entries(proportions).map(([k, v]: any) => {
            return {
                rank: k,
                proportion: v,
                payout: _get(partyPayouts, [k], 0),
            };
        })
);
