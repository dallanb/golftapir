import React from 'react';
import MemberAppLayoutSider from '@layouts/AppLayout/MemberAppLayoutSider';
import LeaguesCreateSiderContent from './LeaguesCreateSiderContent';
import { LeaguesCreateSiderProps } from './types';

const LeaguesCreateSider: React.FunctionComponent<LeaguesCreateSiderProps> = () => {
    return <MemberAppLayoutSider content={<LeaguesCreateSiderContent />} />;
};

export default LeaguesCreateSider;
