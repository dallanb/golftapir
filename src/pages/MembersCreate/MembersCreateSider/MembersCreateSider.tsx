import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import MembersCreateSiderContent from './MembersCreateSiderContent';
import { MembersCreateSiderProps } from './types';

const MembersCreateSider: React.FunctionComponent<MembersCreateSiderProps> = () => {
    return <AppLayoutSider content={<MembersCreateSiderContent />} />;
};

export default MembersCreateSider;
