import React from 'react';
import { Statistic } from 'antd';
import { WinPercentageProps } from './types';
import CONSTANTS from '@locale/en-CA';
import './WinPercentage.less';

const WinPercentage: React.FunctionComponent<WinPercentageProps> = ({
    value,
}) => {
    return (
        <Statistic
            title={CONSTANTS.PAGES.LEAGUE_HOME.STATS.WIN_PERCENTAGE}
            value={value}
            suffix="%"
        />
    );
};

export default WinPercentage;
