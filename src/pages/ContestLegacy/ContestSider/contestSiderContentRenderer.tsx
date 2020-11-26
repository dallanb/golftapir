import constants from '@constants';
import React from 'react';
import ContestSiderPending from './ContestSiderPending';
import ContestSiderActive from './ContestSiderActive';
import ContestSiderSpectator from './ContestSiderSpectator';

const contestSiderContentRenderer = (status: string) => {
    let siderContent = null;
    switch (status) {
        case constants.STATUS.PENDING.KEY:
            siderContent = <ContestSiderPending />;
            console.log('we got a pender over here');
            break;
        case constants.STATUS.ACTIVE.KEY:
            siderContent = <ContestSiderActive />;
            console.log('we got a guy ready to roll over here');
            break;
        case constants.STATUS.SPECTATOR.KEY:
            siderContent = <ContestSiderSpectator />;
            console.log('we got a guy who gets off just be watching over here');
            break;
    }
    return siderContent;
};

export default contestSiderContentRenderer;
