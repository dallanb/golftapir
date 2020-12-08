import React from 'react';
import ContestLeaderboardTableParticipant from './ContestLeaderboardTableParticipant';

export const columnsSchema = [
    {
        Header: 'Pos',
        accessor: 'rank',
        Cell: ({
            value = 'NA',
            row: {
                original: { count },
            },
        }: any) => {
            const prefix = count > 1 ? 'T' : '';
            return `${prefix}${value}`;
        },
        className: 'pos',
    },
    {
        Header: 'Participant',
        accessor: 'uuid',
        Cell: ({ value }: any) => (
            <ContestLeaderboardTableParticipant uuid={value} />
        ),
        className: 'participant',
    },
    {
        Header: 'Score',
        accessor: 'score',
        Cell: ({ value }: any) => value,
        className: 'score',
    },
    {
        Header: 'Strokes',
        accessor: 'strokes',
        Cell: ({ value }: any) => value,
        className: 'strokes',
    },
];
