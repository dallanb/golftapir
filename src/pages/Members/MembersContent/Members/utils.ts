import { get as _get, sortBy as _sortBy } from 'lodash';

export const normalizeMembers = (me: any, data: any[]) => {
    const uuid = _get(me, ['uuid'], undefined);
    return _sortBy(data, ({ member }) => (member === uuid ? 0 : 1));
};
