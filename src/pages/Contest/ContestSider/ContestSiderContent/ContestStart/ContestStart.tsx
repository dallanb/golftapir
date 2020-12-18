import React from 'react';
import { ContestStartProps } from './types';
import './ContestStart.less';
import { useSelector } from 'react-redux';
import { selectContestStartTime } from '@pages/Contest/selector';
import { formatTimeStamp } from '@pages/Contest/utils';

const ContestStart: React.FunctionComponent<ContestStartProps> = () => {
    const time = useSelector(selectContestStartTime);
    return (
        <div className="contest-start">
            <div className="contest-start-label">Start Time</div>
            <div className="contest-start-value">{formatTimeStamp(time)}</div>
        </div>
    );
};

export default ContestStart;
