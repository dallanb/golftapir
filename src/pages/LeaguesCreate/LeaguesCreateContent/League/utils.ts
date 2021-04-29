import { pick as _pick } from 'lodash';
import config from 'Config';

export const prepareInitialValues = () => {
    return {
        sport_uuid: config.GOLF_UUID, // not being used right now when creating a league but will it be used eventually?
    };
};
