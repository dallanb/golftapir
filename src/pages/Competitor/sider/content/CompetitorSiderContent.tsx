import React from 'react';
import { ContentLayoutContent } from '@layouts';
import CompetitorActions from './CompetitorActions';
import { CompetitorSiderContentProps } from './types';

const CompetitorSiderContent: React.FunctionComponent<CompetitorSiderContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <CompetitorActions />
        </ContentLayoutContent>
    );
};

export default CompetitorSiderContent;
