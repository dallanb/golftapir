import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import ContestsCreateSiderContent from './ContestsCreateSiderContent';
import { ContestsCreateSiderProps } from './types';

const ContestsCreateSider: React.FunctionComponent<ContestsCreateSiderProps> = () => {
    return <AppLayoutSider content={<ContestsCreateSiderContent />} />;
};

export default ContestsCreateSider;
