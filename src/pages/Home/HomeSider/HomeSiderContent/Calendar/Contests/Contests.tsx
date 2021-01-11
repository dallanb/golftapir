import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Badge } from 'antd';
import { ContestsProps } from './types';
import { selectData } from '../selector';
import { formatTimeStamp } from './utils';
import './Contests.less';

const Contests: React.FunctionComponent<ContestsProps> = ({
    date,
    onClick,
}) => {
    const { contestHash } = useSelector(selectData);
    const contests = _get(contestHash, [date.date()], []);

    return (
        <div className="contests-list">
            {contests.map((contest: any) => (
                <div
                    key={contest.uuid}
                    onClick={() => onClick(contest)}
                    className="contest-item"
                >
                    <div className="contest-item-badge">
                        <Badge color="green" />
                    </div>
                    <div className="contest-item-name">{contest.name}</div>
                    <div className="contest-item-date">
                        {formatTimeStamp(contest.start_time)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contests;
