import React from 'react';
import { Typography } from 'antd';
import { CompetitorResultsProps } from './types';
import './CompetitorResults.scss';

class CompetitorResults extends React.PureComponent<CompetitorResultsProps> {
    render() {
        return (
            <div className="competitor-results">
                <Typography.Title level={5}>Results</Typography.Title>
            </div>
        );
    }
}

export default CompetitorResults;
