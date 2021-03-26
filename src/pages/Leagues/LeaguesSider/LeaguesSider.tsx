import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import { LeaguesSiderProps } from './types';
import LeaguesSiderContent from './LeaguesSiderContent';
import './LeaguesSider.less';

const LeaguesSider: React.FunctionComponent<LeaguesSiderProps> = () => {
    return <AppLayoutSider content={<LeaguesSiderContent />} />;
};

export default LeaguesSider;
