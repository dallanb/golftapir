import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get as _get } from 'lodash';
import { MemberStatsProps } from './types';
import LeagueHomePageSiderContentMemberStatsActions from './actions';
import { selectData, selectStat } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import Wins from './Wins';
import Winnings from './Winnings';
import WinPercentage from './WinPercentage';
import './MemberStats.less';

const MemberStats: React.FunctionComponent<MemberStatsProps> = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const leagueUUID = _get(params, ['league_uuid'], undefined);
    const { isInitialized } = useSelector(selectData);
    const stat = useSelector(selectStat);

    const winCount = _get(stat, ['win_count'], 0);
    const eventCount = _get(stat, ['event_count'], 0);
    const winningTotal = _get(stat, ['winning_total'], 0);
    const winPercentage = isNaN(winCount / eventCount)
        ? 'NA'
        : (winCount / eventCount) * 100;

    useEffect(() => {
        dispatch(LeagueHomePageSiderContentMemberStatsActions.init(leagueUUID));
        return () => {
            dispatch(LeagueHomePageSiderContentMemberStatsActions.terminate());
        };
    }, []);

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="member-stats-wins space"
            title={'My Stats'}
        >
            <Wins value={winCount} />
            <WinPercentage value={winPercentage} />
            <Winnings value={winningTotal} />
        </ComponentContent>
    );
};

export default MemberStats;
