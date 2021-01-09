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
        <div className="contests-list">
            <ul>
                {contests.map((contest: any) => {
                    console.log(contest);
                    return (
                        <li key={contest.uuid} className="contest-item">
                            <span className="contest-item-name">
                                {contest.name}
                            </span>
                            <br />
                            <span className="contest-item-date">
                                {formatTimeStamp(contest.start_time)}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Contests;
