import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import ContestSiderContent from './ContestSiderContent';
import { ContestSiderProps } from './types';

const ContestSider: React.FunctionComponent<ContestSiderProps> = () => {
    return <AppLayoutSider content={<ContestSiderContent />} />;
};

export default ContestSider;
