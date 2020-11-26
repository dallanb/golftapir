import React from 'react';
import { ContentLayoutContent } from '@layouts';
import ContestLeadersTable from './ContestLeadersTable';
import { ContestContentProps } from './types';

const ContestContent: React.FunctionComponent<ContestContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <ContestLeadersTable />
        </ContentLayoutContent>
    );
};

export default ContestContent;
