import React from 'react';
import { range as _range } from 'lodash';
export const columnsSchemaGenerator = (holes: number) => [
    {
        accessor: 'head',
        Cell: ({ value }: any) => value,
        className: 'head',
    },
    ..._range(1, holes).map((hole: number) => {
        return {
            accessor: `hole-${hole}`,
            Cell: ({ value }: any) => value,
            className: 'hole',
        };
    }),
    {
        accessor: 'tail',
        Cell: ({ value }: any) => value,
        className: 'tail',
    },
];
