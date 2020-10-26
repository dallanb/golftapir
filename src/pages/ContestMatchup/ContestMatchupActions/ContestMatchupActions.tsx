import React from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { ContestActionsProps } from './types';
import {
    selectMyParticipantSheet,
    selectStatus,
    selectIsOwner,
} from '../selector';
import { memoizedContestMatchupActionRenderer } from './contestMatchupActionRenderer';
import './ContestMatchupActions.scss';

const ContestMatchupActions: React.FunctionComponent<ContestActionsProps> = ({
    actions,
}) => {
    const participantSheet = useSelector(selectMyParticipantSheet);
    const isOwner = useSelector(selectIsOwner);
    const status = useSelector(selectStatus);

    const Actions = memoizedContestMatchupActionRenderer({
        actions,
        participantSheet,
        isOwner,
        status,
    });
    if (!Actions) return null;
    return (
        <div className="contest-matchup-actions">
            <Typography.Title level={5}>Actions</Typography.Title>
            <div>{Actions}</div>
        </div>
    );
};

export default ContestMatchupActions;
