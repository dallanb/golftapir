import { get as _get } from 'lodash';
const getName = (data: any, fallback: string) => {
    const first = _get(data, ['first_name'], '');
    const last = _get(data, ['last_name'], '');
    return `${first} ${last}` || fallback;
};

export default getName;
