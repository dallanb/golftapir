import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { LeagueProps } from './types';
import LeaguePageActions from './actions';
import LeagueHeader from './LeagueHeader';
import LeagueContent from './LeagueContent';
import LeagueSider from './LeagueSider';
import { selectData } from './selector';
import { selectLeague } from '@apps/LeagueApp/selector';
import './League.less';

const League: React.FunctionComponent<LeagueProps> = () => {
    const dispatch = useDispatch();
    const league = useSelector(selectLeague);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeaguePageActions.preInit(league));
        dispatch(LeaguePageActions.init(league.uuid));
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
            className="league-view"
        />
    );
};

export default League;
