import React from 'react';
import { get as _get } from 'lodash';
import { ContestLeaderboardTableScorecardProps } from './types';

const ContestLeaderboardTableScorecard: React.FunctionComponent<ContestLeaderboardTableScorecardProps> = ({
    row,
}) => {
    console.log(row);
    const { original } = row;
    const name =
        _get(original, ['first_name'], '') +
        ' ' +
        _get(original, ['last_name'], '');
    return <div>{name}</div>;
};

export default ContestLeaderboardTableScorecard;
