import { pick as _pick } from 'lodash';

export const loadState = (keys: string[] = []) => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        const state = JSON.parse(serializedState);
        return _pick(state, keys);
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.error(err);
        // ignore write errors
    }
};
