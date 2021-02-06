import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContestLeaderboardTable from './ContestLeaderboardTable';
import { ContestLeaderboardProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import ContestPageContentContestLeaderboardActions from './actions';
import { selectIsInitialized, selectIsRefreshing } from './selector';
import {
    selectIsRefreshing as selectIsDataRefreshing,
    selectIsInitialized as selectIsDataInitialized,
} from '@pages/Contest/selector';
import './ContestLeaderboard.less';
import CONSTANTS from '@locale/en-CA';

const ContestLeaderboard: React.FunctionComponent<ContestLeaderboardProps> = ({}) => {
    const dispatch = useDispatch();
    const isDataRefreshing = useSelector(selectIsDataRefreshing);
    const isDataInitialized = useSelector(selectIsDataInitialized);
    const isInitialized = useSelector(selectIsInitialized);
    const isRefreshing = useSelector(selectIsRefreshing);
    const showSpinner =
        !isInitialized ||
        !isDataInitialized ||
        isRefreshing ||
        isDataRefreshing;
    const [triggerRefresh, setTriggerRefresh] = useState(false);
    const [isDataInitializing, setIsDataInitializing] = useState(true);

    useEffect(() => {
        // dispatch(ContestPageContentContestLeaderboardActions.init());
        return () => {
            dispatch(ContestPageContentContestLeaderboardActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isDataInitialized && isDataInitializing) {
            dispatch(ContestPageContentContestLeaderboardActions.init());
            setIsDataInitializing(false);
        }
    }, [isDataInitialized]);

    useEffect(() => {
        if (isDataRefreshing) {
            setTriggerRefresh(true);
        }
        if (!isDataRefreshing && triggerRefresh) {
            dispatch(ContestPageContentContestLeaderboardActions.refresh());
            setTriggerRefresh(false);
        }
    }, [isDataRefreshing]);

    return (
        <ComponentContent
            showSpinner={showSpinner}
            className="contest-leaderboard space"
            title={CONSTANTS.PAGES.CONTEST.LEADERBOARD}
        >
            <ContestLeaderboardTable />
        </ComponentContent>
    );
};

export default ContestLeaderboard;
