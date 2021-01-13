import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import { MemberStandingsProps } from './types';
import { selectIsInitialized, selectIsRefreshing } from './selector';
import LeagueHomePageContentMemberStandingsActions from './actions';
import MemberStandingsTable from './MemberStandingsTable';
import './MemberStandings.less';

const MemberStandings: React.FunctionComponent<MemberStandingsProps> = () => {
    const dispatch = useDispatch();
    const isInitialized = useSelector(selectIsInitialized);
    const isRefreshing = useSelector(selectIsRefreshing);
    const showSpinner = !isInitialized || isRefreshing;
    const [triggerRefresh, setTriggerRefresh] = useState(false);

    useEffect(() => {
        dispatch(LeagueHomePageContentMemberStandingsActions.init());
        return () => {
            dispatch(LeagueHomePageContentMemberStandingsActions.terminate());
        };
    }, []);

    return (
        <ComponentContent
            className="member-standings"
            showSpinner={showSpinner}
        >
            <MemberStandingsTable />
        </ComponentContent>
    );
};

export default MemberStandings;
