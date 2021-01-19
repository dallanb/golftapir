import React from 'react';
import { ContentLayoutContent } from '@layouts';
import { HomeContentProps } from './types';
import Leagues from './Leagues';
import MemberInfo from './MemberInfo';

const HomeContent: React.FunctionComponent<HomeContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <>
                <MemberInfo />
                <Leagues />
            </>
        </ContentLayoutContent>
    );
};

export default HomeContent;
