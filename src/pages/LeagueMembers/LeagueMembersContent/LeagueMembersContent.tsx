import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Members from './Members';
import { LeagueMembersContentProps } from './types';

const LeagueMembersContent: React.FunctionComponent<LeagueMembersContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Members />
        </ContentLayoutContent>
    );
};

export default LeagueMembersContent;
