import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import { LeagueHomeSiderProps } from './types';
import LeagueHomeSiderContent from './LeagueHomeSiderContent';

const LeagueHomeSider: React.FunctionComponent<LeagueHomeSiderProps> = () => {
    return <AppLayoutSider content={<LeagueHomeSiderContent />} />;
};

export default LeagueHomeSider;
