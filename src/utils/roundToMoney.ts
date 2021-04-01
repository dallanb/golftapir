import memoize from 'memoize-one';
import { round as _round } from 'lodash';

const roundToMoney = memoize((amount: number) => _round(amount, 2).toFixed(2));

export default roundToMoney;
