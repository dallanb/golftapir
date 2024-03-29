import React from 'react';
import { useSelector } from 'react-redux';
import { ParticipantActiveProps } from './types';
import { selectIsOwner } from '@pages/Contest/selector';
import { selectContestStatus } from '@modules/Contest/selector';
import constants from '@constants';
import ContestActive from './ContestActive';
import ContestPending from './ContestPending';
import ContestReady from './ContestReady';
import './ParticipantActive.less';
import { selectMe } from '@selectors/BaseSelector';

const ParticipantActive: React.FunctionComponent<ParticipantActiveProps> = () => {
    const status = useSelector(selectContestStatus);
    const isOwner = useSelector(selectIsOwner);
    const { isRefreshing, isInitialized } = useSelector(selectMe);
    let content = null;
    if (isRefreshing || !isInitialized) return content;
    switch (status) {
        case constants.STATUS.PENDING.KEY:
            if (isOwner) {
                content = <ContestPending />;
            }
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

export default ParticipantActive;
