import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { LeagueHomeProps } from './types';
import LeagueHomePageActions from './actions';
import LeagueHomeHeader from './LeagueHomeHeader';
import LeagueHomeContent from './LeagueHomeContent';
import LeagueHomeSider from './LeagueHomeSider';
import { selectData } from './selector';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import './LeagueHome.less';

const LeagueHome: React.FunctionComponent<LeagueHomeProps> = () => {
    const dispatch = useDispatch();
    const leagueUUID = useSelector(selectMyLeagueUUID);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeagueHomePageActions.init(leagueUUID));
        return () => {
            dispatch(LeagueHomePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<LeagueHomeHeader />}
            content={<LeagueHomeContent />}
            sider={<LeagueHomeSider />}
            // showSpinner={!isInitialized}
            className="league-home-view"
        />
    );
};

export default LeagueHome;
