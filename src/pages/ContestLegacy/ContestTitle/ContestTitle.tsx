import React from 'react';
import { ContestTitleProps } from './types';
import { formatTimeStamp } from '../utils';
import './ContestTitle.scss';

const ContestTitle: React.FunctionComponent<ContestTitleProps> = ({
    title,
    time,
}) => {
    const startTime = formatTimeStamp(time);

    return (
        <div className="contest-title">
            <div className="contest-title-time">{startTime}</div>
            <div className="contest-title-title">{title}</div>
        </div>
    );
};

export default ContestTitle;
