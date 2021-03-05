import memoize from 'memoize-one';
import { groupBy as _groupBy, sortBy as _sortBy } from 'lodash';
import moment from 'moment';

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM DD YYYY') : 'NA';

export const organizeMembersByStatus = memoize((members: any[] = []) =>
    _groupBy(members, 'status')
);

export const organizeMembers = memoize((uuid: string, members: any[]) => {
    const sortedMembers = _sortBy(members, ({ member }) =>
        member === uuid ? 0 : 1
    );
    return organizeMembersByStatus(sortedMembers);
});
