import React from 'react';
import { useSelector } from 'react-redux';
import { ContestSiderActiveProps } from './types';
import { selectContestStatus } from '@pages/Contest/selector';
import constants from '@constants';
import ContestActive from './ContestActive';
import ContestPending from './ContestPending';
import ContestReady from './ContestReady';
import './ParticipantActive.less';

const ParticipantActive: React.FunctionComponent<ContestSiderActiveProps> = () => {
    const contestStatus = useSelector(selectContestStatus);

    const contentRenderer = (status: string) => {
        let content = <div />;
        switch (status) {
            case constants.STATUS.PENDING.KEY:
                content = <ContestPending />;
                break;
            case constants.STATUS.READY.KEY:
                content = <ContestReady />;
                break;
            case constants.STATUS.ACTIVE.KEY:
            case constants.STATUS.COMPLETED.KEY:
                content = <ContestActive />;
                break;
        }
        return content;
    };

    return contentRenderer(contestStatus);
};

export default ParticipantActive;
