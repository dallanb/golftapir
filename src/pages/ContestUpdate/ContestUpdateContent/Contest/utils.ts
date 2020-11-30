import { pick as _pick } from 'lodash';

export const prepareInitialValues = (contestData: any) => {
    return _pick(contestData, ['name', 'avatar', 'start_time']);
};
