import React from 'react';
import ContestLeadersTableParticipant from './ContestLeadersTableParticipant';
import { CellValue } from 'react-table';
import { totalStrokeCalculator } from '@utils';

export const columnsSchema = [
    {
        accessor: 'participant',
        width: 200,
        Cell: ({ value }: any) => (
            <ContestLeadersTableParticipant uuid={value} />
        ),
    },
    {
        Header: 'Score',
        accessor: 'holes',
        width: 100,
        Cell: ({ value }: any) => {
            return <div>{totalStrokeCalculator(value)}</div>;
        },
    },
];
