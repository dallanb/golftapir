import { get as _get, toUpper as _toUpper } from 'lodash';
import constants from '@constants';

const mapStatusColour = (status: string): string =>
    _get(constants, ['STATUS', _toUpper(status), 'COLOUR'], 'grey');

export default mapStatusColour;
