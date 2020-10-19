import React from 'react';
import ContestParticipantsTableStatus from './ContestParticipantsTableStatus';
import ContestParticipantsTableWagerButton from './ContestParticipantsTableWagerButton';
import { CellValue } from 'react-table';
import ContestParticipantsTableParticipant from '@pages/Contest/ContestParticipantsTable/ContestParticipantsTableParticipant';

export const columnsSchema = [
    {
        Header: 'Participant',
        accessor: 'participant',
        width: 200,
        Cell: ({
            row: {
                original: {
                    avatar: { s3_filename },
                    first_name,
                    last_name,
                    membership_uuid,
                },
            },
        }: any) => (
            <ContestParticipantsTableParticipant
                first_name={first_name}
                last_name={last_name}
                s3_filename={s3_filename}
                uuid={membership_uuid}
            />
        ),
    },
    {
        Header: 'Status',
        accessor: 'status',
        width: 125,
        Cell: ({
            value,
            row: {
                original: { uuid, is_me },
            },
        }: CellValue) => (
            <ContestParticipantsTableStatus
                status={value}
                uuid={uuid}
                is_me={is_me}
            />
        ),
    },
    {
        Header: 'Wager',
        accessor: 'wager',
        width: 125,
        Cell: ({
            value,
            row: {
                original: { uuid, is_me },
            },
        }: CellValue) => (
            <ContestParticipantsTableWagerButton
                status={value}
                uuid={uuid}
                is_me={is_me}
            />
        ),
    },
];
