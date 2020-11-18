import React from 'react';
import ContestLeadersTableParticipant from './ContestLeadersTableParticipant';
import { CellValue } from 'react-table';
import { totalStrokeCalculator } from '@utils';

export const columnsSchema = [
    {
        Header: 'Pos',
        accessor: null,
        width: 50,
        Cell: () => <div>1</div>,
    },
    {
        Header: 'Participant',
        accessor: 'uuid',
        width: 500,
        Cell: ({ value }: any) => (
            <ContestLeadersTableParticipant uuid={value} />
        ),
    },
    {
        Header: 'Score',
        accessor: 'score',
        width: 100,
        Cell: ({ value }: any) => {
            return <div>{value}</div>;
        },
    },
    // {
    //     Header: 'Thru',
    //     accessor: null,
    //     width: 100,
    //     Cell: ({ value }: any) => {
    //         return <div>1</div>;
    //     },
    // },
    {
        Header: 'Strokes',
        accessor: 'strokes',
        width: 100,
        Cell: ({ value }: any) => {
            return <div>{value}</div>;
        },
    },
];
