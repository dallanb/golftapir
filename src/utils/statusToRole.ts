import constants from '@constants';
import { get as _get, toUpper as _toUpper } from 'lodash';

const statusToRole = (status: string): number =>
    _get(constants, ['ROLE', _toUpper(status)], -1);

export default statusToRole;
