import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Members from './Members';
import { MembersContentProps } from './types';

const MembersContent: React.FunctionComponent<MembersContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Members />
        </ContentLayoutContent>
    );
};

export default MembersContent;
