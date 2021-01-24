import { pick as _pick } from 'lodash';
import config from 'config';

export const prepareInitialValues = () => {
    return {
        sport_uuid: config.GOLF_UUID, // not being used right now when creating a league but will it be used eventually?
    };
};
