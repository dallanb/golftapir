import React from 'react';
import { CompetitorsListTileCountryProps } from './types';
import './CompetitorsListTileCountry.less';

const CompetitorsListTileCountry: React.FunctionComponent<CompetitorsListTileCountryProps> = ({
    country,
}) => (
    <div className="country">
        <div className="country-label">COUNTRY</div>
        <div className="country-content">{country}</div>
    </div>
);

export default CompetitorsListTileCountry;
