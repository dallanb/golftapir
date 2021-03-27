import React from 'react';
import { WinPercentageProps } from './types';
import CONSTANTS from '@locale/en-CA';
import './WinPercentage.less';

const WinPercentage: React.FunctionComponent<WinPercentageProps> = ({
    value,
}) => {
    const percentage =
        typeof value === 'number' ? `${Math.round(value)}%` : value;
    return (
        <div className="win-percentage">
            <div className="win-percentage-label">
                {CONSTANTS.PAGES.LEAGUE_HOME.STATS.WIN_PERCENTAGE}
            </div>
            <div className="win-percentage-value">{percentage}</div>
        </div>
    );
};

export default WinPercentage;
