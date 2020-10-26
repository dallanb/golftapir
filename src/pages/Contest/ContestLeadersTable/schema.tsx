import React from 'react';
import ContestLeadersTableParticipant from './ContestLeadersTableParticipant';
import { CellValue } from 'react-table';

export const columnsSchema = [
    {
        accessor: 'participant',
        width: 200,
        Cell: ({
            row: {
                original: { participant },
            },
        }: any) => <ContestLeadersTableParticipant uuid={participant} />,
    },
];
