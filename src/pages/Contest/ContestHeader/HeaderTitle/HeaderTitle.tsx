import React from 'react';
import { HeaderTitleProps } from './types';
import { formatTimeStamp } from '../utils';
import {
    selectContestName,
    selectContestStartTime,
} from '@pages/Contest/selector';
import './HeaderTitle.less';
import { useSelector } from 'react-redux';

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = () => {
    const title = useSelector(selectContestName);
    const time = useSelector(selectContestStartTime);
    const startTime = formatTimeStamp(time);

    return (
        <div className="header-title">
            {/*<div className="header-title-time">{startTime}</div>*/}
            <div className="header-title-title">{title}</div>
        </div>
    );
};

export default HeaderTitle;
