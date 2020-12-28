import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeaguesProps } from './types';
import { ContentLayout } from '@layouts';
import { selectData } from './selector';
import LeaguesPageActions from './actions';
import LeaguesSider from './LeaguesSider';
import LeaguesHeader from './LeaguesHeader';
import LeaguesContent from './LeaguesContent';
import './Leagues.less';

const Leagues: React.FunctionComponent<LeaguesProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeaguesPageActions.init());
        return () => {
            dispatch(LeaguesPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<LeaguesHeader />}
            sider={<LeaguesSider />}
            content={<LeaguesContent />}
            // showSpinner={!isInitialized}
            className="leagues-view"
        />
    );
};

export default Leagues;
