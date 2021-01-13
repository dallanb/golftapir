import React from 'react';
import { Statistic } from 'antd';
import { WinningsProps } from './types';
import CONSTANTS from '@locale/en-CA';
import './Winnings.less';

const Winnings: React.FunctionComponent<WinningsProps> = ({ value }) => {
    return (
        <Statistic
            title={CONSTANTS.PAGES.LEAGUE_HOME.STATS.WINNINGS}
            value={value}
            prefix="$"
        />
    );
};

export default Winnings;
