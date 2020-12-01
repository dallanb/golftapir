import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import ContestLeadersTable from './ContestLeaderboard/ContestLeaderboardTable';
import { ContestContentProps } from './types';
import { selectData } from '../selector';

const ContestContent: React.FunctionComponent<ContestContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <ContestLeadersTable />
        </ContentLayoutContent>
    );
};

export default ContestContent;
