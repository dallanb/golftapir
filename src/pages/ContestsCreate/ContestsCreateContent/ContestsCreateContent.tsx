import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Contest from './Contest';
import { ContestsCreateContentProps } from './types';

const ContestsCreateContent: React.FunctionComponent<ContestsCreateContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Contest />
        </ContentLayoutContent>
    );
};

export default ContestsCreateContent;
