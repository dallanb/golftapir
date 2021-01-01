import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { LeagueMembersProps } from './types';
import LeagueMembersPageActions from './actions';
import LeagueMembersHeader from './LeagueMembersHeader';
import LeagueMembersContent from './LeagueMembersContent';
import LeagueMembersSider from './LeagueMembersSider';
import { selectData } from './selector';
import {selectLeague} from "@apps/LeagueApp/selector";
import './LeagueMembers.less';

const LeagueMembers: React.FunctionComponent<LeagueMembersProps> = () => {
    const dispatch = useDispatch();
    const league = useSelector(selectLeague)
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeagueMembersPageActions.init(league.uuid));
        return () => {
            dispatch(LeagueMembersPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<LeagueMembersHeader />}
            content={<LeagueMembersContent />}
            sider={<LeagueMembersSider />}
            // showSpinner={!isInitialized}
            className="league-members-view"
        />
    );
};

export default LeagueMembers;
