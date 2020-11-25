import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompetitorResultsList from './CompetitorResultsList';
import { CompetitorResultsProps } from './types';
import CompetitorPageContentCompetitorResultsActions from './actions';
import { selectData } from './selector';
import './CompetitorResults.scss';
import ComponentContent from '@layouts/ComponentContent';

const CompetitorResults: React.FunctionComponent<CompetitorResultsProps> = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CompetitorPageContentCompetitorResultsActions.init());
        return () => {
            dispatch(CompetitorPageContentCompetitorResultsActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="competitor-results"
        >
            <CompetitorResultsList />
        </ComponentContent>
    );
};

export default CompetitorResults;
