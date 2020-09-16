import React from 'react';
import { withS3URL } from '@utils';
import { Avatar, Tag } from 'antd';
import { mapStatusColour } from '@pages/Contest/utils';

export const columnsSchema = [
    {
        Header: 'Avatar',
        accessor: 'avatar.s3_filename',
        Cell: ({ value }: any) => (
            <Avatar src={withS3URL(value)} alt="broken.png" />
        ),
    },
    { Header: 'First Name', accessor: 'first_name' },
    { Header: 'Last Name', accessor: 'last_name' },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }: any) => (
            <Tag color={mapStatusColour(value)}>{value}</Tag>
        ),
    },
];
