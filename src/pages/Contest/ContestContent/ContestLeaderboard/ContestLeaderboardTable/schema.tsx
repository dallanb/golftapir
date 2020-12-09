import React from 'react';
import ContestLeaderboardTableParticipant from './ContestLeaderboardTableParticipant';
import ContestLeaderboardTableToggle from './ContestLeaderboardTableToggle';

export const columnsSchema = [
    {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row, listRef }: any) => (
            // Use Cell to render an expander for each row.
            // We can use the getToggleRowExpandedProps prop-getter
            // to build the expander.
            <ContestLeaderboardTableToggle row={row} listRef={listRef} />
        ),
        // We can override the cell renderer with a SubCell to be used with an expanded row
        SubCell: () => null, // No expander on an expanded row
        className: 'expander',
    },
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
        SubCell: (cellProps: any) => <> {cellProps.value} 🎉</>,
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
