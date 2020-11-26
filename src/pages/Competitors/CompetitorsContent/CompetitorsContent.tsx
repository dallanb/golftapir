import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Competitors from './Competitors';
import { CompetitorsContentProps } from './types';

const CompetitorsContent: React.FunctionComponent<CompetitorsContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Competitors />
        </ContentLayoutContent>
    );
};

export default CompetitorsContent;
