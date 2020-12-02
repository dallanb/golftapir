import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompetitorsList from './CompetitorsList';
import { CompetitorsProps } from './types';
import CompetitorsPageContentCompetitorsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Competitors.scss';

const Competitors: React.FunctionComponent<CompetitorsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(CompetitorsPageContentCompetitorsActions.init());
        return () => {
            dispatch(CompetitorsPageContentCompetitorsActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="competitors"
        >
            <CompetitorsList containerRef={ref} />
        </ComponentContent>
    );
};

export default Competitors;
