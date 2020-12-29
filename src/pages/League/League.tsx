import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { LeagueProps } from './types';
import LeaguePageActions from './actions';
import LeagueHeader from './LeagueHeader';
import LeagueContent from './LeagueContent';
import LeagueSider from './LeagueSider';
import { selectData } from './selector';
import './League.less';

const League: React.FunctionComponent<LeagueProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeaguePageActions.init());
        return () => {
            dispatch(LeaguePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<LeagueHeader />}
            content={<LeagueContent />}
            sider={<LeagueSider />}
            // showSpinner={!isInitialized}
            className="home-view"
        />
    );
};

export default League;
