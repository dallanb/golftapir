import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import HomeSiderContent from './HomeSiderContent';
import { HomeSiderProps } from './types';

const HomeSider: React.FunctionComponent<HomeSiderProps> = () => {
    return <LeagueAppLayoutSider content={<HomeSiderContent />} />;
};

export default HomeSider;
