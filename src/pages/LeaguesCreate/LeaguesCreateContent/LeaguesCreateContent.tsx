import React from 'react';
import { ContentLayoutContent } from '@layouts';
import League from './League';
import { LeaguesCreateContentProps } from './types';

const LeaguesCreateContent: React.FunctionComponent<LeaguesCreateContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <League />
        </ContentLayoutContent>
    );
};

export default LeaguesCreateContent;
