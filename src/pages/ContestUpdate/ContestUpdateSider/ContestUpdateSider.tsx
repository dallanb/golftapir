import React from 'react';
import { ContentLayoutSider } from '@layouts';
import ContestUpdateSiderHeader from './ContestUpdateSiderHeader';
import ContestUpdateSiderContent from './ContestUpdateSiderContent';
import { ContestUpdateSiderProps } from './types';

const ContestUpdateSider: React.FunctionComponent<ContestUpdateSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<ContestUpdateSiderHeader />}
            content={<ContestUpdateSiderContent />}
        />
    );
};

export default ContestUpdateSider;
