import React from 'react';
import { ContentLayoutContent } from '@layouts';
import CompetitorResults from './CompetitorResults';
import { CompetitorContentProps } from './types';

const CompetitorContent: React.FunctionComponent<CompetitorContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <CompetitorResults />
        </ContentLayoutContent>
    );
};

export default CompetitorContent;
