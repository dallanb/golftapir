import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompetitorResultsList from './CompetitorResultsList';
import { CompetitorResultsProps } from './types';
import CompetitorPageContentCompetitorResultsActions from './actions';
import { selectData } from './selector';
import './CompetitorResults.less';
import ComponentContent from '@layouts/ComponentContent';
import InvitesList from '@pages/Members/MembersSider/MembersSiderContent/MemberActive/Invites/InvitesList';

const CompetitorResults: React.FunctionComponent<CompetitorResultsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(CompetitorPageContentCompetitorResultsActions.init());
        return () => {
            dispatch(CompetitorPageContentCompetitorResultsActions.terminate());
        };
    }, []);

    const {
        isInitialized,
        isFetching,
        data = [],
        metadata = [],
        options = undefined,
    } = useSelector(selectData);

    const dimensions = {
        height: Math.max(200, data.length * 50 + 63),
    };

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            style={dimensions}
            className="competitor-results"
        >
            <CompetitorResultsList
                containerRef={ref}
                data={data}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default CompetitorResults;
