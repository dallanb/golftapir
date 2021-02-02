import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import ContestUpdateSiderContent from './ContestUpdateSiderContent';
import { ContestUpdateSiderProps } from './types';

const ContestUpdateSider: React.FunctionComponent<ContestUpdateSiderProps> = () => {
    return <LeagueAppLayoutSider content={<ContestUpdateSiderContent />} />;
};

export default ContestUpdateSider;
