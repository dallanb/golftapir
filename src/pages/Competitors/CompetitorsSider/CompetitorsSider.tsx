import React from 'react';
import { ContentLayoutSider } from '@layouts';
import { CompetitorsSiderProps } from './types';
import CompetitorsSiderHeader from './CompetitorsSiderHeader';
import CompetitorsSiderContent from './CompetitorsSiderContent';
import './CompetitorsSider.scss';

const CompetitorsSider: React.FunctionComponent<CompetitorsSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<CompetitorsSiderHeader />}
            content={<CompetitorsSiderContent />}
        />
    );
};

export default CompetitorsSider;
