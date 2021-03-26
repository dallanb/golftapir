import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import HomeSiderContent from './HomeSiderContent';
import { HomeSiderProps } from './types';

const HomeSider: React.FunctionComponent<HomeSiderProps> = () => {
    return <AppLayoutSider content={<HomeSiderContent />} />;
};

export default HomeSider;
