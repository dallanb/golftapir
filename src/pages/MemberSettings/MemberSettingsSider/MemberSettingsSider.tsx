import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import MemberSettingsSiderContent from './MemberSettingsSiderContent';
import { MemberSettingsSiderProps } from './types';

const MemberSettingsSider: React.FunctionComponent<MemberSettingsSiderProps> = () => {
    return <AppLayoutSider content={<MemberSettingsSiderContent />} />;
};

export default MemberSettingsSider;
