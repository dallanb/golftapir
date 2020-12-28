import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaguesList from './LeaguesList';
import { LeaguesProps } from './types';
import LeaguesPageContentLeaguesActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Leagues.less';

const Leagues: React.FunctionComponent<LeaguesProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(LeaguesPageContentLeaguesActions.init());
        return () => {
            dispatch(LeaguesPageContentLeaguesActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="leagues"
        >
            <LeaguesList containerRef={ref} />
        </ComponentContent>
    );
};

export default Leagues;
