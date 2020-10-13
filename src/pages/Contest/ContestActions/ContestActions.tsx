import React from 'react';
import { Button, Typography } from 'antd';
import { ContestActionsProps } from './types';
import './ContestActions.scss';
import {
    mapActionColour,
    mapActionLabel,
    renderAction,
} from '@pages/Contest/utils';

const ContestActions: React.FunctionComponent<ContestActionsProps> = ({
    isOwner,
    status,
    participants,
    actions,
}) => {
    const renderActions = () =>
        actions.reduce((accumulatedActions: any[], { key, onClick }: any) => {
            accumulatedActions.push(
                <Button
                    key={key}
                    onClick={onClick}
                    disabled={!renderAction(key, { status, participants })}
                    className="contest-actions-button"
                >
                    {mapActionLabel(key)}
                </Button>
            );
            return accumulatedActions;
        }, []);

    const Actions = renderActions();
    if (!isOwner || !Actions.length) return null;
    return (
        <div className="contest-actions">
            <Typography.Title level={5}>Actions</Typography.Title>
            <div>{Actions}</div>
        </div>
    );
};

export default ContestActions;
