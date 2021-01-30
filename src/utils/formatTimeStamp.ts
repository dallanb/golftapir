import moment from 'moment';

const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM DD YYYY') : 'NA';

export default formatTimeStamp;
