import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Contests from './Contests';
import { ContestsContentProps } from './types';

const ContestsContent: React.FunctionComponent<ContestsContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Contests />
        </ContentLayoutContent>
    );
};

export default ContestsContent;
