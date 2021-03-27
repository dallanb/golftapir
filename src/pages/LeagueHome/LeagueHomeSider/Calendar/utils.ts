import { get as _get, set as _set } from 'lodash';
import moment from 'moment';

export const generateContestHash = (existingHash: any, newData: any[]) =>
    newData.reduce((accum, curr) => {
        const startTime = _get(curr, ['start_time'], 0);
        const day = moment(startTime).date();
        if (!accum[day]) {
            accum[day] = [];
        }
        accum[day].push(curr);
        return accum;
    }, existingHash || {});
