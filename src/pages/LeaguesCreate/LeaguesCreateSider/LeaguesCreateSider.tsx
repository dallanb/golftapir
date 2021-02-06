import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import LeaguesCreateSiderContent from './LeaguesCreateSiderContent';
import { LeaguesCreateSiderProps } from './types';

const LeaguesCreateSider: React.FunctionComponent<LeaguesCreateSiderProps> = () => {
    return <LeagueAppLayoutSider content={<LeaguesCreateSiderContent />} />;
};

export default LeaguesCreateSider;
