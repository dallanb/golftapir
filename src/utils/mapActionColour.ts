import { get as _get, toUpper as _toUpper } from 'lodash';
import constants from '@constants';

const mapActionColour = (action: string): string =>
    _get(constants, ['ACTION', _toUpper(action), 'COLOUR'], 'grey');

export default mapActionColour;
