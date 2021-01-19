import React from 'react';
import { ContentLayoutContent } from '@layouts';
import { HomeContentProps } from './types';
import Leagues from './Leagues';

const HomeContent: React.FunctionComponent<HomeContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Leagues />
        </ContentLayoutContent>
    );
};

export default HomeContent;
