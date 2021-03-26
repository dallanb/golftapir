import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import { ContestsSiderProps } from './types';
import ContestsSiderContent from './ContestsSiderContent';
import './ContestsSider.less';

const ContestsSider: React.FunctionComponent<ContestsSiderProps> = () => {
    return <AppLayoutSider content={<ContestsSiderContent />} />;
};

export default ContestsSider;
