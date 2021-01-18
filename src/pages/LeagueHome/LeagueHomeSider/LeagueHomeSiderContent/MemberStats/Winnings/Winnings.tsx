import React from 'react';
import { WinningsProps } from './types';
import './Winnings.less';
import { formatTimeStamp } from '@pages/Contest/utils';
import CONSTANTS from '@locale/en-CA';

const Winnings: React.FunctionComponent<WinningsProps> = ({ value }) => {
    return (
        <div className="winnings">
            <div className="winnings-label">
                {CONSTANTS.PAGES.LEAGUE_HOME.STATS.WINNINGS}
            </div>
            <div className="winnings-value">${value}</div>
        </div>
    );
};

export default Winnings;
