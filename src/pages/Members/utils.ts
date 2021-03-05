import memoize from 'memoize-one';
import { sortBy as _sortBy } from 'lodash';
import moment from 'moment';

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM DD YYYY') : 'NA';

export const organizeMembers = memoize((uuid: string, members: any[]) =>
    _sortBy(members, ({ member }) => (member === uuid ? 0 : 1))
);
