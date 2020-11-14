import React from 'react';
import { Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import CompetitorResultsList from './CompetitorResultsList';
import { CompetitorResultsProps } from './types';
import './CompetitorResults.scss';

const CompetitorResults: React.FunctionComponent<CompetitorResultsProps> = ({}) => {
    const history = useHistory();
    return (
        <div className="competitor-results">
            <CompetitorResultsList history={history} />
        </div>
    );
};

export default CompetitorResults;
