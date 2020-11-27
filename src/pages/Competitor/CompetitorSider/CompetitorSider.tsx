import React from 'react';
import { ContentLayoutSider } from '@layouts';
import CompetitorSiderHeader from './CompetitorSiderHeader';
import CompetitorSiderContent from './CompetitorSiderContent';
import { CompetitorSiderProps } from './types';

const CompetitorSider: React.FunctionComponent<CompetitorSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<CompetitorSiderHeader />}
            content={<CompetitorSiderContent />}
        />
    );
};

export default CompetitorSider;
