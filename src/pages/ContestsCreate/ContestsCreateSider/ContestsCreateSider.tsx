import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import ContestsCreateSiderContent from './ContestsCreateSiderContent';
import { ContestsCreateSiderProps } from './types';

const ContestsCreateSider: React.FunctionComponent<ContestsCreateSiderProps> = () => {
    return <LeagueAppLayoutSider content={<ContestsCreateSiderContent />} />;
};

export default ContestsCreateSider;
