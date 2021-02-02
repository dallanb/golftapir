import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import ContestSiderContent from './ContestSiderContent';
import { ContestSiderProps } from './types';

const ContestSider: React.FunctionComponent<ContestSiderProps> = () => {
    return <LeagueAppLayoutSider content={<ContestSiderContent />} />;
};

export default ContestSider;
