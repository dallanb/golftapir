import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import { MemberSiderProps } from './types';
import MemberSiderContent from './MemberSiderContent';
import './MemberSider.less';

const MemberSider: React.FunctionComponent<MemberSiderProps> = () => {
    return <AppLayoutSider content={<MemberSiderContent />} />;
};

export default MemberSider;
