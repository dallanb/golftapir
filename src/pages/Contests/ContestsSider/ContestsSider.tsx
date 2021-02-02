import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import { ContestsSiderProps } from './types';
import ContestsSiderContent from './ContestsSiderContent';
import './ContestsSider.less';

const ContestsSider: React.FunctionComponent<ContestsSiderProps> = () => {
    return <LeagueAppLayoutSider content={<ContestsSiderContent />} />;
};

export default ContestsSider;
