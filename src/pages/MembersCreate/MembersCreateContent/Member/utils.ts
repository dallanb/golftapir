import { pick as _pick } from 'lodash';
import config from 'Config';

export const prepareInitialValues = (memberData: {
    email?: string;
    league_uuid: string;
}) => {
    return memberData;
};
