import React from 'react';
import ContestLeaderboardTableParticipant from './ContestLeaderboardTableParticipant';

export const columnsSchema = [
    {
        Header: 'Pos',
        accessor: null,
        Cell: () => <div>1</div>,
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
