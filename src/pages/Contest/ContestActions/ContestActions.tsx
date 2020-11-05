import React from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { ContestActionsProps } from './types';
import {
    selectContestParticipants,
    selectContestStartTime,
    selectContestStatus,
    selectIsOwner,
} from '../selector';
import { memoizedContestActionRenderer } from './contestActionRenderer';
import './ContestActions.scss';

const ContestActions: React.FunctionComponent<ContestActionsProps> = ({
    actions,
}) => {
    const participants = useSelector(selectContestParticipants);
    const isOwner = useSelector(selectIsOwner);
    const status = useSelector(selectContestStatus);
    const startTime = useSelector(selectContestStartTime);

    const Actions = memoizedContestActionRenderer({
        actions,
        status,
        participants,
        isOwner,
        startTime,
    });
    if (!Actions) return null;
    return (
        <div className="contest-actions">
            <div>{Actions}</div>
        </div>
    );
};

export default ContestActions;
