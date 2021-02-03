import React from 'react';
import { ContentLayoutContent } from '@layouts';
import ContestInfo from './ContestInfo';
import ContestLeaderboard from './ContestLeaderboard';
import { ContestContentProps } from './types';

const ContestContent: React.FunctionComponent<ContestContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <>
                <ContestInfo />
                <ContestLeaderboard />
            </>
        </ContentLayoutContent>
    );
};

export default ContestContent;
