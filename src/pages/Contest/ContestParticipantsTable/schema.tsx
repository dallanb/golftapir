import React from 'react';
import ContestParticipantsTableStatus from './ContestParticipantsTableStatus';
import ContestParticipantsTableWagerButton from './ContestParticipantsTableWagerButton';
import { CellValue } from 'react-table';
import ContestParticipantsTableParticipant from '@pages/Contest/ContestParticipantsTable/ContestParticipantsTableParticipant';

export const columnsSchema = [
    {
        Header: 'Participant',
        accessor: 'user_uuid',
        width: 200,
        Cell: ({ value }: { value: string }) => {
            return <ContestParticipantsTableParticipant uuid={value} />;
        },
    },
    // {
    //     Header: 'Status',
    //     accessor: 'status',
    //     width: 150,
    //     Cell: ({
    //         value,
    //         row: {
    //             original: { uuid, user_uuid },
    //         },
    //     }: CellValue) => (
    //         <ContestParticipantsTableStatus
    //             status={value}
    //             uuid={uuid}
    //             user_uuid={user_uuid}
    //         />
    //     ),
    // },
    {
        Header: 'Score',
        accessor: 'score',
        width: 125,
    },
    // {
    //     Header: 'Wager',
    //     accessor: 'wager',
    //     width: 125,
    //     Cell: ({
    //         value,
    //         row: {
    //             original: { uuid, is_me },
    //         },
    //     }: CellValue) => (
    //         <ContestParticipantsTableWagerButton
    //             status={value}
    //             uuid={uuid}
    //             is_me={is_me}
    //         />
    //     ),
    // },
];
