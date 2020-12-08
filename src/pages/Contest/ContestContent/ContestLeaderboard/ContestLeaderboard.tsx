import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContestLeaderboardTable from './ContestLeaderboardTable';
import { ContestLeaderboardProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import ContestPageContentContestLeaderboardActions from './actions';
import { selectIsInitialized, selectIsRefreshing } from './selector';
import { selectIsRefreshing as selectIsBaseRefreshing } from '@pages/Contest/selector';
import './ContestLeaderboard.scss';

const ContestLeaderboard: React.FunctionComponent<ContestLeaderboardProps> = ({}) => {
    const dispatch = useDispatch();
    const isBaseRefreshing = useSelector(selectIsBaseRefreshing);
    const isInitialized = useSelector(selectIsInitialized);
    const isRefreshing = useSelector(selectIsRefreshing);
    const showSpinner = !isInitialized || isRefreshing || isBaseRefreshing;
    const [triggerRefresh, setTriggerRefresh] = useState(false);

    useEffect(() => {
        dispatch(ContestPageContentContestLeaderboardActions.init());
        return () => {
            dispatch(ContestPageContentContestLeaderboardActions.terminate());
        };
    }, []);

    React.useEffect(() => {
        if (isBaseRefreshing) {
            setTriggerRefresh(true);
        }
        if (!isBaseRefreshing && triggerRefresh) {
            dispatch(ContestPageContentContestLeaderboardActions.refresh());
            setTriggerRefresh(false);
        }
    }, [isBaseRefreshing]);

    return (
        <ComponentContent
            showSpinner={showSpinner}
            className="contest-leaderboard"
        >
            <ContestLeaderboardTable />
        </ComponentContent>
    );
};

export default ContestLeaderboard;
