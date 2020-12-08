import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContestLeaderboardTable from './ContestLeaderboardTable';
import { ContestLeaderboardProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import ContestPageContentContestLeaderboardActions from './actions';
import { selectIsInitialized } from './selector';
import './ContestLeaderboard.scss';

const ContestLeaderboard: React.FunctionComponent<ContestLeaderboardProps> = ({}) => {
    const dispatch = useDispatch();
    const isInitialized = useSelector(selectIsInitialized);

    useEffect(() => {
        dispatch(ContestPageContentContestLeaderboardActions.init());
        return () => {
            dispatch(ContestPageContentContestLeaderboardActions.terminate());
        };
    }, []);

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
