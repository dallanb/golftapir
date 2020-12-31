import { get as _get, toUpper as _toUpper } from 'lodash';
import { saveState } from '../localStorage';

const localStorageSave = (f: any): any => (key: string) => (...args: any) => {
    const res = f(...args);
    saveState({ [key]: res });
    return res;
};

export default localStorageSave;
