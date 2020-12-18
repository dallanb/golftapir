import React from 'react';
import { range as _range } from 'lodash';
import ScorecardHole from './ScorecardHole';

export const columnsSchemaGenerator = (holes: number) => [
    {
        accessor: 'head',
        Cell: ({ value }: any) => value,
        className: 'head',
    },
    ..._range(1, holes).map((hole: number) => {
        return {
            accessor: `hole-${hole}`,
            Cell: ({ row, value }: any) => (
                <ScorecardHole index={hole} row={row} value={value} />
            ),
            className: 'hole',
        };
    }),
    {
        accessor: 'tail',
        Cell: ({ value }: any) => value,
        className: 'tail',
    },
];
