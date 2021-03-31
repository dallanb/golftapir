import { saveState } from '../localStorage';

const localStorageClear = (): any => {
    saveState({});
    return {};
};

export default localStorageClear;
