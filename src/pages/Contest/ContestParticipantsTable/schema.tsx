import React from 'react';
import { withS3URL } from '@utils';
import { Avatar } from '@components';
import ContestParticipantsTableStatus from './ContestParticipantsTableStatus';
import ContestParticipantsTableWagerButton from './ContestParticipantsTableWagerButton';
import { CellValue } from 'react-table';

export const columnsSchema = [
    {
        Header: 'Participant',
        accessor: 'participant',
        Cell: ({
            row: {
                original: {
                    avatar: { s3_filename },
                    first_name,
                    last_name,
                },
            },
        }: any) => (
            <>
                <Avatar
                    src={s3_filename && withS3URL(s3_filename)}
                    name={`${first_name} ${last_name}`}
                />
                {first_name}
                {last_name}
            </>
        ),
    },
    {
        Header: 'Status',
        accessor: 'status',
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
