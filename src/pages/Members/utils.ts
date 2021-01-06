import moment from 'moment';

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM DD YYYY') : 'NA';
