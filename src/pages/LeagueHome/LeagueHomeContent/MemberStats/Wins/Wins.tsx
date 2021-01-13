import React from 'react';
import { Statistic } from 'antd';
import { WinsProps } from './types';
import CONSTANTS from '@locale/en-CA';
import './Wins.less';

const Wins: React.FunctionComponent<WinsProps> = ({ value }) => {
    return (
        <Statistic
            title={CONSTANTS.PAGES.LEAGUE_HOME.STATS.WINS}
            value={value}
        />
    );
};

export default Wins;
