import React from 'react';
import { useSelector } from 'react-redux';
import { ParticipantCompletedProps } from './types';
import { selectContestStatus } from '@modules/Contest/selector';
import constants from '@constants';
import ContestActive from './ContestActive';
import ContestCompleted from './ContestCompleted';
import './ParticipantCompleted.less';

const ParticipantCompleted: React.FunctionComponent<ParticipantCompletedProps> = () => {
    const contestStatus = useSelector(selectContestStatus);

    const contentRenderer = (status: string) => {
        let content = <div />;
        switch (status) {
            case constants.STATUS.COMPLETED.KEY:
                content = <ContestCompleted />;
                break;
            case constants.STATUS.ACTIVE.KEY:
                content = <ContestActive />;
                break;
        }
        return content;
    };

    return contentRenderer(contestStatus);
};

export default ParticipantCompleted;
