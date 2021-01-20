import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import { HomeContentProps } from './types';
import Leagues from './Leagues';
import MemberInfo from './MemberInfo';
import { selectIsInitialized } from '@apps/MemberApp/selector';

const HomeContent: React.FunctionComponent<HomeContentProps> = ({}) => {
    const isInitialized = useSelector(selectIsInitialized);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <>
                <MemberInfo />
                <Leagues />
            </>
        </ContentLayoutContent>
    );
};

export default HomeContent;
