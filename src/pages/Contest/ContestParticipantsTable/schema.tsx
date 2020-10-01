import React from 'react';
import { withS3URL } from '@utils';
import { Tag } from 'antd';
import { mapStatusColour } from '@pages/Contest/utils';
import { Avatar } from '@components';
import ContestParticipantsTableStatus from '@pages/Contest/ContestParticipantsTable/ContestParticipantsTableStatus';
import { CellValue } from 'react-table';

export const columnsSchema = [
    {
        Header: 'Avatar',
        accessor: 'avatar.s3_filename',
        Cell: ({ value, row: { values } }: any) => (
            <Avatar
                src={value && withS3URL(value)}
                name={`${values.first_name} ${values.last_name}`}
            />
        ),
    },
    { Header: 'First Name', accessor: 'first_name' },
    { Header: 'Last Name', accessor: 'last_name' },
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
];
