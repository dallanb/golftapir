import React from 'react';
import { Typography } from 'antd';
import { ContestActionsProps } from './types';
import './ContestActions.scss';

const ContestActions: React.FunctionComponent<ContestActionsProps> = ({
    actions,
}) => {
    if (!actions.length) return null;
    return (
        <>
            <Typography.Title level={5}>Actions</Typography.Title>
        </>
    );
};

export default ContestActions;
