import { pick as _pick } from 'lodash';
import config from 'config';

export const prepareInitialValues = (memberData: {
    email?: string;
    league_uuid: string;
}) => {
    return memberData;
};
