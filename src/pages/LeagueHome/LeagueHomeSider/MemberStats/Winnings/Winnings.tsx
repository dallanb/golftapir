import React from 'react';
import { WinningsProps } from './types';
import CONSTANTS from '@locale/en-CA';
import { roundToMoney } from '@utils';
import './Winnings.less';

const Winnings: React.FunctionComponent<WinningsProps> = ({ value }) => {
    return (
        <div className="winnings">
            <div className="winnings-label">
                {CONSTANTS.PAGES.LEAGUE_HOME.STATS.WINNINGS}
            </div>
            <div className="winnings-value">${roundToMoney(value)}</div>
        </div>
    );
};

export default Winnings;
