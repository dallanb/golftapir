import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import { ContestLeaderboardTableCountryProps } from './types';
import { selectAccountsHash } from '@pages/Contest/selector';
import './ContestLeaderboardTableCountry.less';

const ContestLeaderboardTableCountry: React.FunctionComponent<ContestLeaderboardTableCountryProps> = ({
    uuid,
}) => {
    const accountsHash = useSelector(selectAccountsHash);
    const country = _get(accountsHash, [uuid, 'address', 'country'], undefined);
    console.log(country);
    const Country = _get(Flags, [country], null);
    return <Country className="contest-leaderboard-table-country-flag" />;
};

export default ContestLeaderboardTableCountry;
