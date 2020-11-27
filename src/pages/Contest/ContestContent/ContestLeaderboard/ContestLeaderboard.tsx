import React from 'react';
import { useSelector } from 'react-redux';
import ContestLeaderboardTable from './ContestLeaderboardTable';
import { ContestLeaderboardProps } from './types';
import { selectData } from '@pages/Contest/selector';
import ComponentContent from '@layouts/ComponentContent';
import './ContestLeaderboard.scss';

const ContestLeaderboard: React.FunctionComponent<ContestLeaderboardProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="contest-leaderboard"
        >
            <ContestLeaderboardTable />
        </ComponentContent>
    );
};

export default ContestLeaderboard;
