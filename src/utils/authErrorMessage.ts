import { ReactNode } from 'react';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';

const authErrorMessage = (msg: string): ReactNode => {
    const status = Object.values(constants.STATUS).find(({ KEY: key }) =>
        msg.includes(key)
    );
    const key = status ? status.KEY : null;

    switch (key) {
        case constants.STATUS.PENDING.KEY:
            return CONSTANTS.AUTH.ERROR.LOGIN_CONFIRM_EMAIL;
        case constants.STATUS.INACTIVE.KEY:
        case constants.STATUS.ACTIVE.KEY:
            return CONSTANTS.AUTH.ERROR.LOGIN;
        default:
            return CONSTANTS.AUTH.ERROR.LOGIN;
    }
};

export default authErrorMessage;
