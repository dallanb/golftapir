import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import { ContestLeaderboardTableCountryProps } from './types';
import { selectLeagueMembersDataHashByMember } from '@selectors/AppSelector';
import './ContestLeaderboardTableCountry.less';

const ContestLeaderboardTableCountry: React.FunctionComponent<ContestLeaderboardTableCountryProps> = ({
    uuid,
}) => {
    const membersHash = useSelector(selectLeagueMembersDataHashByMember);
    const country = _get(membersHash, [uuid, 'country'], undefined);
    const Country = _get(Flags, [country], null);
    return Country ? (
        <Country className="contest-leaderboard-table-country-flag" />
    ) : (
        Country
    );
};

export default ContestLeaderboardTableCountry;
