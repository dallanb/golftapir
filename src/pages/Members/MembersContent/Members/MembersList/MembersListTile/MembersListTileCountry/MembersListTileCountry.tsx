import React from 'react';
import { get as _get } from 'lodash';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import { MembersListTileCountryProps } from './types';
import './MembersListTileCountry.less';

const MembersListTileCountry: React.FunctionComponent<MembersListTileCountryProps> = ({
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

export default MembersListTileCountry;
