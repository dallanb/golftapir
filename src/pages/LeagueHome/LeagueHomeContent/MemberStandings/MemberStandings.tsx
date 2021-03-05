import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import { MemberStandingsProps } from './types';
import { selectIsInitialized, selectIsRefreshing } from './selector';
import LeagueHomePageContentMemberStandingsActions from './actions';
import MemberStandingsTable from './MemberStandingsTable';
import './MemberStandings.less';
import CONSTANTS from '@locale/en-CA';
import { selectLeagueMembersIsFetching } from '@selectors/AppSelector';

const MemberStandings: React.FunctionComponent<MemberStandingsProps> = () => {
    const dispatch = useDispatch();
    const isInitialized = useSelector(selectIsInitialized);
    const isRefreshing = useSelector(selectIsRefreshing);
    const leagueMembersIsFetching = useSelector(selectLeagueMembersIsFetching);
    const showSpinner =
        !isInitialized || isRefreshing || leagueMembersIsFetching;
    const [triggerRefresh, setTriggerRefresh] = useState(false);

    useEffect(() => {
        dispatch(LeagueHomePageContentMemberStandingsActions.init());
        return () => {
            dispatch(LeagueHomePageContentMemberStandingsActions.terminate());
        };
    }, []);

    return (
        <ComponentContent
            className="member-standings space"
            showSpinner={showSpinner}
            title={CONSTANTS.PAGES.LEAGUE_HOME.STANDINGS}
        >
            <MemberStandingsTable />
        </ComponentContent>
    );
};

export default MemberStandings;
