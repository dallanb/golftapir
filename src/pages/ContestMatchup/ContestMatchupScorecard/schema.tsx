import React from 'react';
import { range as _range } from 'lodash';
import { CellValue } from 'react-table';
import ContestParticipantsTableParticipant from '@pages/Contest/ContestParticipantsTable/ContestParticipantsTableParticipant';
import { EditableCell } from '@components';

const infoSchema: any[] = [
    {
        accessor: 'participant',
        width: 200,
        Cell: ({
            value: {
                avatar: { s3_filename },
                first_name,
                last_name,
                membership_uuid,
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
];

const holeSchema: any[] = _range(1, 19).map((ix: number) => {
    return {
        Header: ix,
        accessor: `holes.${ix}.strokes`,
        width: 50,
        // Cell: ({ value }: any) => {
        //     return <EditableCell/>
        // },
        Cell: ({
            value,
            row: {
                original: { uuid },
            },
        }: {
            value: number;
            row: {
                original: {
                    uuid: string;
                };
            };
        }) => (
            <EditableCell
                key={ix}
                initialValue={value || ''}
                onBlur={(value: string) => console.log(value, uuid)}
            />
        ),
    };
});

const totalSchema: any[] = [];

export const columnsSchema = [...infoSchema, ...holeSchema, ...totalSchema];
