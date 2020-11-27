import moment from 'moment';

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM DD H:M A') : 'NA';
