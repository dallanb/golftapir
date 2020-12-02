import React from 'react';
import ContestLeaderboardTableParticipant from './ContestLeaderboardTableParticipant';
import { CellValue } from 'react-table';
import { totalStrokeCalculator } from '@utils';

export const columnsSchema = [
    {
        Header: 'Pos',
        accessor: null,
        // width: 50,
        Cell: () => <div>1</div>,
        className: 'pos',
    },
    {
        Header: 'Participant',
        accessor: 'uuid',
        // width: 500,
        Cell: ({ value }: any) => (
            <ContestLeaderboardTableParticipant uuid={value} />
        ),
        className: 'participant',
    },
    {
        Header: 'Score',
        accessor: 'score',
        // width: 100,
        Cell: ({ value }: any) => {
            return <div>{value}</div>;
        },
        className: 'score',
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
        // width: 100,
        Cell: ({ value }: any) => {
            return <div>{value}</div>;
        },
        className: 'strokes',
    },
];
