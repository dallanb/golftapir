import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import { MemberSiderProps } from './types';
import MemberSiderContent from './MemberSiderContent';
import './MemberSider.less';

const MemberSider: React.FunctionComponent<MemberSiderProps> = () => {
    return <LeagueAppLayoutSider content={<MemberSiderContent />} />;
};

export default MemberSider;
