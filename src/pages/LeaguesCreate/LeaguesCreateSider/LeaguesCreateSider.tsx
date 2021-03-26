import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import LeaguesCreateSiderContent from './LeaguesCreateSiderContent';
import { LeaguesCreateSiderProps } from './types';

const LeaguesCreateSider: React.FunctionComponent<LeaguesCreateSiderProps> = () => {
    return <AppLayoutSider content={<LeaguesCreateSiderContent />} />;
};

export default LeaguesCreateSider;
