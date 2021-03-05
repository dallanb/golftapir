import memoize from 'memoize-one';
import { groupBy as _groupBy } from 'lodash';
import moment from 'moment';

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM DD YYYY') : 'NA';

export const organizeMembersByStatus = memoize((members: any[] = []) =>
    _groupBy(members, 'status')
);
