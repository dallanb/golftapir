import React from 'react';
import { Tag, Typography } from 'antd';
import { toUpper as _toUpper } from 'lodash';
import { ContestStatusProps } from './types';
import { mapStatusColour } from '../utils';
import './ContestStatus.scss';

const ContestStatus: React.FunctionComponent<ContestStatusProps> = ({
    status,
    className,
}) => {
    return (
        <div className="contest-status">
            <Typography.Title level={5}>Status: </Typography.Title>
            <div
                style={{ color: mapStatusColour(status) }}
                className="contest-status-status"
            >
                {_toUpper(status)}
            </div>
        </div>
    );
};

export default ContestStatus;
