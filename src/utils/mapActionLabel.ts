import { get as _get, toUpper as _toUpper } from 'lodash';
import constants from '@constants';

const mapActionLabel = (action: string): string =>
    _get(constants, ['ACTION', _toUpper(action), 'LABEL'], null);

export default mapActionLabel;
