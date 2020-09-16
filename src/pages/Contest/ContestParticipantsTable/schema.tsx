import React from 'react';
import { withS3URL } from '@utils';
import { Avatar } from 'antd';

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
];
