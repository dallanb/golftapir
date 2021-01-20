import React from 'react';
import ContestLeaderboardTableCountry from './ContestLeaderboardTableCountry';
import ContestLeaderboardTableParticipant from './ContestLeaderboardTableParticipant';
import ContestLeaderboardTableToggle from './ContestLeaderboardTableToggle';
import ContestLeaderboardTablePosition from './ContestLeaderboardTablePosition';
import { sortType } from '../utils';

const columnsSchema = [
    {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row, listRef, toggleAllRowsExpanded }: any) => (
            // Use Cell to render an expander for each row.
            // We can use the getToggleRowExpandedProps prop-getter
            // to build the expander.
            <ContestLeaderboardTableToggle
                row={row}
                listRef={listRef}
                toggleAllRows={toggleAllRowsExpanded}
            />
        ),
        // We can override the cell renderer with a SubCell to be used with an expanded row
        SubCell: () => null, // No expander on an expanded row
        className: 'expander',
    },
    {
        Header: 'Pos',
        accessor: 'rank',
        Cell: ({ row }: any) => <ContestLeaderboardTablePosition row={row} />,
        SubCell: () => null,
        className: 'pos',
        sortType,
    },
    {
        Header: 'Country',
        accessor: 'uuid',
        id: 'country',
        Cell: ({ value }: any) => (
            <ContestLeaderboardTableCountry uuid={value} />
        ),
        className: 'country',
        disableSortBy: true,
    },
    {
        Header: 'Member',
        accessor: 'uuid',
        Cell: ({ value }: any) => (
            <ContestLeaderboardTableParticipant uuid={value} />
        ),
        className: 'participant',
        disableSortBy: true,
    },
    {
        Header: 'Score',
        accessor: 'score',
        Cell: ({ value }: any) => value,
        className: 'score',
        sortType,
    },
    {
        Header: 'Strokes',
        accessor: 'strokes',
        Cell: ({ value }: any) => value,
        className: 'strokes',
        sortType,
    },
];

export default columnsSchema;
