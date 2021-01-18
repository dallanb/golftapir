import React from 'react';
import { WinsProps } from './types';
import CONSTANTS from '@locale/en-CA';
import './Wins.less';

const Wins: React.FunctionComponent<WinsProps> = ({ value }) => {
    return (
        <div className="wins">
            <div className="wins-label">
                {CONSTANTS.PAGES.LEAGUE_HOME.STATS.WINS}
            </div>
            <div className="wins-value">{value}</div>
        </div>
    );
};

export default Wins;
