import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get as _get } from 'lodash';
import { MemberStatsProps } from './types';
import LeagueHomePageSiderMemberStatsActions from './actions';
import { selectData, selectStat } from './selector';
import { selectMeIsInitialized, selectMyStat } from '@selectors/BaseSelector';
import { SiderComponentContent } from '@layouts/ComponentContent';
import Wins from './Wins';
import Winnings from './Winnings';
import WinPercentage from './WinPercentage';
import './MemberStats.less';
import CONSTANTS from '@locale/en-CA';

const MemberStats: React.FunctionComponent<MemberStatsProps> = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const leagueUUID = _get(params, ['league_uuid'], undefined);
    const { isInitialized } = useSelector(selectData);
    const meIsInitialized = useSelector(selectMeIsInitialized);
    const stat = useSelector(selectMyStat);

    const winCount = _get(stat, ['win_count'], 0);
    const eventCount = _get(stat, ['event_count'], 0);
    const winningTotal = _get(stat, ['winning_total'], 0);
    const winPercentage = isNaN(winCount / eventCount)
        ? 'NA'
        : (winCount / eventCount) * 100;

    useEffect(() => {
        dispatch(LeagueHomePageSiderMemberStatsActions.init(leagueUUID));
        return () => {
            dispatch(LeagueHomePageSiderMemberStatsActions.terminate());
        };
    }, []);

    return (
        <SiderComponentContent
            showSpinner={!isInitialized || !meIsInitialized}
            className="member-stats-wins"
            title={CONSTANTS.PAGES.LEAGUE_HOME.STATS.TITLE}
        >
            <Wins value={winCount} />
            <WinPercentage value={winPercentage} />
            <Winnings value={winningTotal} />
        </SiderComponentContent>
    );
};

export default MemberStats;
