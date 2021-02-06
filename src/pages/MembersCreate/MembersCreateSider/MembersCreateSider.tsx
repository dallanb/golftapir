import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import MembersCreateSiderContent from './MembersCreateSiderContent';
import { MembersCreateSiderProps } from './types';

const MembersCreateSider: React.FunctionComponent<MembersCreateSiderProps> = () => {
    return <LeagueAppLayoutSider content={<MembersCreateSiderContent />} />;
};

export default MembersCreateSider;
