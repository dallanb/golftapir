import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import { MembersSiderProps } from './types';
import MembersSiderContent from './MembersSiderContent';
import './MembersSider.less';

const MembersSider: React.FunctionComponent<MembersSiderProps> = () => {
    return <AppLayoutSider content={<MembersSiderContent />} />;
};

export default MembersSider;
