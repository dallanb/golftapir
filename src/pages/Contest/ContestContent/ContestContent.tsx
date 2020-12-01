import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import ContestLeaderboard from './ContestLeaderboard';
import { ContestContentProps } from './types';
import { selectData } from '../selector';

const ContestContent: React.FunctionComponent<ContestContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <ContestLeaderboard />
        </ContentLayoutContent>
    );
};

export default ContestContent;
