import React from 'react';
import { get as _get } from 'lodash';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import { CompetitorsListTileCountryProps } from './types';
import './CompetitorsListTileCountry.less';

const CompetitorsListTileCountry: React.FunctionComponent<CompetitorsListTileCountryProps> = ({
    country,
}) => {
    const CountryFlag = _get(Flags, [country], null);
    return (
        <div className="country">
            <div className="country-label">COUNTRY</div>
            <div className="country-content">
                <div className="country-content-flag">
                    <CountryFlag className="country-content-flag-icon" />
                </div>
            </div>
        </div>
    );
};

export default CompetitorsListTileCountry;
