import React from 'react';
import { Typography } from 'antd';
import { toUpper as _toUpper } from 'lodash';
import { useSelector } from 'react-redux';
import { ContestStatusProps } from './types';
import { mapStatusColour } from '@utils';
import { selectContestStatus } from '../selector';
import './ContestStatus.scss';

const ContestStatus: React.FunctionComponent<ContestStatusProps> = ({
    className,
}) => {
    const status = useSelector(selectContestStatus);
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
