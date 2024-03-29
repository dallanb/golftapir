import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppLayoutContent } from '@layouts/AppLayout';
import { LeagueProps } from './types';
import LeaguePageActions from './actions';
import LeagueContent from './LeagueContent';
import LeagueSider from './LeagueSider';
import { selectData } from './selector';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import './League.less';

const League: React.FunctionComponent<LeagueProps> = () => {
    const dispatch = useDispatch();
    const leagueUUID = useSelector(selectMyLeagueUUID);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeaguePageActions.init(leagueUUID));
        return () => {
            dispatch(LeaguePageActions.terminate());
        };
    }, []);

    return (
        <AppLayoutContent
            content={<LeagueContent />}
            sider={<LeagueSider />}
            className="league-view"
        />
    );
};

export default League;
