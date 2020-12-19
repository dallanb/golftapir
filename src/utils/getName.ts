import { get as _get } from 'lodash';
const getName = (data: any, fallback: string) => {
    const displayName = _get(data, ['display_name'], '');
    return displayName || fallback;
};

export default getName;
