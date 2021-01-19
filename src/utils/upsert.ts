import { findIndex as _findIndex } from 'lodash';

const upsert = (arr: any[], key: any, newVal: any): void => {
    const index = _findIndex(arr, key);
    if (index >= 0) {
        arr.splice(index, 1, newVal);
    } else {
        arr.push(newVal);
    }
};

export default upsert;
