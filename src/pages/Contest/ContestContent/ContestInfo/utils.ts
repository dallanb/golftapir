import { get as _get, pick as _pick } from 'lodash';
import { formatTimeStamp } from '@utils';

export const prepareInitialValues = (contestData: any) => {
    const ctime = _get(contestData, ['ctime'], null);
    return {
        ..._pick(contestData, ['uuid', 'name', 'avatar', 'status']),
        ctime: formatTimeStamp(ctime),
    };
};
