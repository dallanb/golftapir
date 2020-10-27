import React from 'react';
import { range as _range } from 'lodash';
import { EditableCell } from '@components';
import { totalStrokeCalculator } from '@utils';
import ContestMatchupScorecardParticipant from './ContestMatchupScorecardParticipant';

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
            <ContestMatchupScorecardParticipant
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
        Cell: ({
            value,
            row: {
                original: { uuid },
            },
        }: {
            value: string;
            row: {
                original: {
                    uuid: string;
                };
            };
        }) => value,
        // || (
        //     <EditableCell
        //         key={ix}
        //         initialValue={value || ''}
        //         onBlur={(value: string) => console.log(value, uuid)}
        //     />
        // ),
    };
});

const totalSchema: any[] = [
    {
        Header: 'Total',
        accessor: 'holes',
        width: 75,
        Cell: ({ value }: any) => {
            return (
                <div>
                    <b>{totalStrokeCalculator(value)}</b>
                </div>
            );
        },
    },
];

export const columnsSchema = [...infoSchema, ...holeSchema, ...totalSchema];
