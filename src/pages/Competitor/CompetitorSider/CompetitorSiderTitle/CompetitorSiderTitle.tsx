import React from 'react';
import { CompetitorSiderTitleProps } from './types';
import './CompetitorSiderTitle.scss';

const CompetitorSiderTitle: React.FunctionComponent<CompetitorSiderTitleProps> = ({
    name,
}) => {
    return (
        <div className="competitor-sider-title">
            <div className="competitor-sider-title-name">{name}</div>
        </div>
    );
};

export default CompetitorSiderTitle;
