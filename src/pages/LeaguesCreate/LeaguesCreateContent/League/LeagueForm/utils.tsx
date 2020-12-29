import { Select } from 'antd';
import { keyBy as _keyBy, get as _get } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { FormikProps, FormikValues } from 'formik';
import { selectSearchData as selectParticipantSearchData } from './LeagueFormSearch/Participant/selector';

export const participantSearchSelectOptionRenderer = (
    formik: FormikProps<FormikValues>
) => {
    const permanentParticipants = _get(
        formik,
        ['values', 'permanent_participants'],
        {}
    );
    const participantSearch = useSelector(selectParticipantSearchData) || [];
    const participants = _keyBy(
        [...participantSearch, ...permanentParticipants],
        'membership_uuid'
    );
    return Object.values(participants).map(
        (participant: { membership_uuid: string; display_name: string }) => (
            <Select.Option
                key={participant.membership_uuid}
                value={participant.membership_uuid}
                disabled={
                    permanentParticipants.findIndex(
                        ({ membership_uuid }: { membership_uuid: string }) =>
                            membership_uuid === participant.membership_uuid
                    ) > -1
                }
            >
                {participant.display_name}
            </Select.Option>
        )
    );
};
