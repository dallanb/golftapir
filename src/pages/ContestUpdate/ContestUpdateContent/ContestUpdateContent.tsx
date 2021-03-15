import React from 'react';
import { ContentLayoutContent } from '@layouts';
import ContestUpdate from './Contest';
import { ContestUpdateContentProps } from './types';

const ContestUpdateContent: React.FunctionComponent<ContestUpdateContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <ContestUpdate />
        </ContentLayoutContent>
    );
};

export default ContestUpdateContent;
