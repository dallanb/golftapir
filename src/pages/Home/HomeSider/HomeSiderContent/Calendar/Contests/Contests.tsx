import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContestsProps } from './types';
import { selectData } from '../selector';
import { formatTimeStamp } from '@pages/Contest/utils';
import './Contests.less';

const Contests: React.FunctionComponent<ContestsProps> = ({ date }) => {
    const { contestHash } = useSelector(selectData);
    const contests = _get(contestHash, [date.date()], []);
    return (
        <ul className="contests-list">
            {contests.map((contest: any) => {
                console.log(contest);
                return (
                    <li key={contest.uuid} className="contest-item">
                        <div className="contest-item-name">{contest.name}</div>
                        <div className="contest-item-date">
                            {formatTimeStamp(contest.start_time)}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Contests;
