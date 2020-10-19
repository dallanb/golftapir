import React from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { CompetitorActionsProps } from './types';
import { selectIsMe } from '../selector';
import { memoizedCompetitorActionRenderer } from './competitorActionRenderer';
import './CompetitorActions.scss';

const CompetitorActions: React.FunctionComponent<CompetitorActionsProps> = ({
    actions,
}) => {
    const isMe = useSelector(selectIsMe);

    const Actions = memoizedCompetitorActionRenderer({
        actions,
        isMe,
    });
    if (!Actions) return null;
    return (
        <div className="competitor-actions">
            <Typography.Title level={5}>Actions</Typography.Title>
            <div>{Actions}</div>
        </div>
    );
};

export default CompetitorActions;
