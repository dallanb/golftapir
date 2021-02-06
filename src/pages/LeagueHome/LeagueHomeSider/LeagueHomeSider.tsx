import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import { LeagueHomeSiderProps } from './types';
import LeagueHomeSiderContent from './LeagueHomeSiderContent';

const LeagueHomeSider: React.FunctionComponent<LeagueHomeSiderProps> = () => {
    return <LeagueAppLayoutSider content={<LeagueHomeSiderContent />} />;
};

export default LeagueHomeSider;
