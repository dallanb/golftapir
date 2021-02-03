import React from 'react';
import MemberAppLayoutSider from '@layouts/AppLayout/MemberAppLayoutSider';
import HomeSiderContent from './HomeSiderContent';
import { HomeSiderProps } from './types';

const HomeSider: React.FunctionComponent<HomeSiderProps> = () => {
    return <MemberAppLayoutSider content={<HomeSiderContent />} />;
};

export default HomeSider;
