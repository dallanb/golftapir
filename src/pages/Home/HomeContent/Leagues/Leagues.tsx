import React, { useRef } from 'react';
import ComponentContent from '@layouts/ComponentContent';
import LeaguesList from './LeaguesList';
import { LeaguesProps } from './types';
import './Leagues.less';
import CONSTANTS from '@locale/en-CA';

const Leagues: React.FunctionComponent<LeaguesProps> = () => {
    const ref = useRef(null);
    return (
        <ComponentContent
            title={CONSTANTS.PAGES.HOME.LEAGUES}
            className="leagues"
        >
            <LeaguesList containerRef={ref} />
        </ComponentContent>
    );
};

export default Leagues;
