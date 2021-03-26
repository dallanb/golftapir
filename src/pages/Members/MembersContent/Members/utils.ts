import { get as _get } from 'lodash';

export const checkRefSpin = (ref: any) =>
    _get(ref, ['current', 'className'], '').includes('spin');
