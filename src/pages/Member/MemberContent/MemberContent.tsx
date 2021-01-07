import React from 'react';
import { ContentLayoutContent } from '@layouts';
import { MemberContentProps } from './types';
import MemberResults from './MemberResults';

const MemberContent: React.FunctionComponent<MemberContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <MemberResults />
        </ContentLayoutContent>
    );
};

export default MemberContent;
