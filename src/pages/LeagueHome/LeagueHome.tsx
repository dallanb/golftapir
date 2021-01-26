import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { LeagueHomeProps } from './types';
import LeagueHomePageActions from './actions';
import LeagueHomeHeader from './LeagueHomeHeader';
import LeagueHomeContent from './LeagueHomeContent';
import LeagueHomeSider from './LeagueHomeSider';
import { selectData } from './selector';
import './LeagueHome.less';

const LeagueHome: React.FunctionComponent<LeagueHomeProps> = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const leagueUUID = _get(params, ['league_uuid'], undefined);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeagueHomePageActions.init(leagueUUID));
        return () => {
            dispatch(LeagueHomePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            // header={<LeagueHomeHeader />}
            content={<LeagueHomeContent />}
            sider={<LeagueHomeSider />}
            // showSpinner={!isInitialized}
            className="league-home-view"
        />
    );
};

export default LeagueHome;
