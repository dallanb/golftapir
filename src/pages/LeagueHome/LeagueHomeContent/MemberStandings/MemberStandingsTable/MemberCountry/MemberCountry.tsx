import React from 'react';
import { get as _get } from 'lodash';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import { MemberCountryProps } from './types';
import './MemberCountry.less';

const MemberCountry: React.FunctionComponent<MemberCountryProps> = ({
    country,
}) => {
    const Country = _get(Flags, [country], null);
    return (
        <div className="member-country">
            <Country className="member-country-flag" />
        </div>
    );
};

export default React.memo(MemberCountry);
