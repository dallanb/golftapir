import React from 'react';
import { ContentLayoutSider } from '@layouts';
import ContestSiderHeader from './ContestSiderHeader';
import ContestSiderContent from './ContestSiderContent';
import { ContestSiderProps } from './types';

const ContestSider: React.FunctionComponent<ContestSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<ContestSiderHeader />}
            content={<ContestSiderContent />}
        />
    );
};

export default ContestSider;
