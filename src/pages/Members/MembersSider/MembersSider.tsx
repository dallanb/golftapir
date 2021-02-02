import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import { MembersSiderProps } from './types';
import MembersSiderContent from './MembersSiderContent';
import './MembersSider.less';

const MembersSider: React.FunctionComponent<MembersSiderProps> = () => {
    return <LeagueAppLayoutSider content={<MembersSiderContent />} />;
};

export default MembersSider;
