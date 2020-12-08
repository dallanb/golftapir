import React from 'react';
import { get as _get } from 'lodash';
import { ContestLeaderboardTableScorecardProps } from './types';

const ContestLeaderboardTableScorecard: React.FunctionComponent<ContestLeaderboardTableScorecardProps> = ({
    row,
    rowProps,
}) => {
    console.log(row);
    console.log(rowProps);
    const { original } = row;
    const name =
        _get(original, ['first_name'], '') +
        ' ' +
        _get(original, ['last_name'], '');
    return (
        <div {...rowProps} className="tr">
            {name}
        </div>
    );
};

export default ContestLeaderboardTableScorecard;
