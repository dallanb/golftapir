import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeaguesProps } from './types';
import { AppLayoutContent } from '@layouts/AppLayout';
import { selectData } from './selector';
import LeaguesPageActions from './actions';
import LeaguesSider from './LeaguesSider';
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
        <AppLayoutContent
            sider={<LeaguesSider />}
            content={<LeaguesContent />}
            className="leagues-view"
        />
    );
};

export default Leagues;
