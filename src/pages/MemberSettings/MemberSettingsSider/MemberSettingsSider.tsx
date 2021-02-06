import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import MemberSettingsSiderContent from './MemberSettingsSiderContent';
import { MemberSettingsSiderProps } from './types';

const MemberSettingsSider: React.FunctionComponent<MemberSettingsSiderProps> = () => {
    return <LeagueAppLayoutSider content={<MemberSettingsSiderContent />} />;
};

export default MemberSettingsSider;
