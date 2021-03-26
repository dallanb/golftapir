import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import ContestUpdateSiderContent from './ContestUpdateSiderContent';
import { ContestUpdateSiderProps } from './types';

const ContestUpdateSider: React.FunctionComponent<ContestUpdateSiderProps> = () => {
    return <AppLayoutSider content={<ContestUpdateSiderContent />} />;
};

export default ContestUpdateSider;
