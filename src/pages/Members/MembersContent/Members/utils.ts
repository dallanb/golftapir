import { get as _get, sortBy as _sortBy } from 'lodash';

// there may be issues if we dont have me in the first x batch of paginated items
export const normalizeMembers = (me: any, data: any[]) => {
    const uuid = _get(me, ['uuid'], undefined);
    return _sortBy(data, ({ member }) => (member === uuid ? 0 : 1));
};
