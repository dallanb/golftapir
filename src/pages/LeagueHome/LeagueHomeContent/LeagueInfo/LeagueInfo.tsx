import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { LeagueInfoProps } from './types';
import LeagueInfoForm from './LeagueInfoForm';
import ComponentContent from '@layouts/ComponentContent';
import './LeagueInfo.less';
import CONSTANTS from '@locale/en-CA';
import {
    selectIsInitialized,
    selectLeagueIsFetching,
} from '@selectors/AppSelector';

const LeagueInfo: React.FunctionComponent<LeagueInfoProps> = () => {
    const ref = useRef(null);
    const isInitialized = useSelector(selectIsInitialized);
    const isLeagueFetching = useSelector(selectLeagueIsFetching);
    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || isLeagueFetching}
            className="league-info"
            bodyClassName="league-info-content"
            title={CONSTANTS.PAGES.LEAGUE_HOME.LEAGUE}
        >
            <LeagueInfoForm />
        </ComponentContent>
    );
};

export default LeagueInfo;
