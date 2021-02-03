import React from 'react';
import { ContentLayoutContent } from '@layouts';
import { MemberContentProps } from './types';
import MemberResults from './MemberResults';
import MemberInfo from './MemberInfo';
import './MemberContent.less';

const MemberContent: React.FunctionComponent<MemberContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <>
                <MemberInfo />
                <MemberResults />
            </>
        </ContentLayoutContent>
    );
};

export default MemberContent;
