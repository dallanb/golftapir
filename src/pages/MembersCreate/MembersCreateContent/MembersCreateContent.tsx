import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Member from './Member';
import { MembersCreateContentProps } from './types';

const MembersCreateContent: React.FunctionComponent<MembersCreateContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Member />
        </ContentLayoutContent>
    );
};

export default MembersCreateContent;
