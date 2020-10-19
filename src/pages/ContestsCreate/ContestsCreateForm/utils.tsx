import { Select } from 'antd';
import { keyBy as _keyBy, get as _get } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCreateFormSearchParticipants } from '@pages/ContestsCreate/selector';
import { FormikProps, FormikValues } from 'formik';

export const participantSearchSelectOptionRenderer = (
    formik: FormikProps<FormikValues>
) => {
    const permanentParticipants = _get(
        formik,
        ['values', 'permanent_participants'],
        {}
    );
    const participants = _keyBy(
        [
            ...useSelector(selectCreateFormSearchParticipants),
            ...permanentParticipants,
        ],
        'membership_uuid'
    );
    return Object.values(
        participants
    ).map(
        (participant: {
            membership_uuid: string;
            first_name: string;
            last_name: string;
        }) => (
            <Select.Option
                key={participant.membership_uuid}
                value={participant.membership_uuid}
                disabled={
                    permanentParticipants.findIndex(
                        ({ membership_uuid }: { membership_uuid: string }) =>
                            membership_uuid === participant.membership_uuid
                    ) > -1
                }
            >{`${participant.first_name} ${participant.last_name}`}</Select.Option>
        )
    );
};
