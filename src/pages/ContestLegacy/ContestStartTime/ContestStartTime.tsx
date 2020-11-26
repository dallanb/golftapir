import React from 'react';
import { useSelector } from 'react-redux';
import { ContestStartTimeProps } from './types';
import { selectContestStartTime } from '../selector';
import './ContestStartTime.scss';
import { formatTimeStamp } from '@pages/Contest/utils';
import { Typography } from 'antd';

const ContestStartTime: React.FunctionComponent<ContestStartTimeProps> = () => {
    const startTime = formatTimeStamp(useSelector(selectContestStartTime));
    return (
        <div className="contest-start-time">
            <Typography.Title level={5}>Start Time: </Typography.Title>
            <div className="contest-start-time-time">{startTime}</div>
        </div>
    );
};

export default ContestStartTime;
