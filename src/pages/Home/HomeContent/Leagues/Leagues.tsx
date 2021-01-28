import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { isNil as _isNil } from 'lodash';
import ComponentContent from '@layouts/ComponentContent';
import { selectLeagues } from '@selectors/BaseSelector';
import LeaguesList from './LeaguesList';
import { LeaguesProps } from './types';
import CONSTANTS from '@locale/en-CA';
import './Leagues.less';

const Leagues: React.FunctionComponent<LeaguesProps> = () => {
    const ref = useRef(null);
    const leagues = useSelector(selectLeagues);

    return (
        <ComponentContent
            componentRef={ref}
            title={CONSTANTS.PAGES.HOME.LEAGUES}
            showSpinner={_isNil(leagues)}
            className="leagues"
        >
            <LeaguesList containerRef={ref} data={leagues} />
        </ComponentContent>
    );
};

export default Leagues;
