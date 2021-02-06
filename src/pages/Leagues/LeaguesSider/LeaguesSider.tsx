import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import { LeaguesSiderProps } from './types';
import LeaguesSiderContent from './LeaguesSiderContent';
import './LeaguesSider.less';

const LeaguesSider: React.FunctionComponent<LeaguesSiderProps> = () => {
    return <LeagueAppLayoutSider content={<LeaguesSiderContent />} />;
};

export default LeaguesSider;
