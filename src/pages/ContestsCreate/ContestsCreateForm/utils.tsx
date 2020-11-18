import { Select } from 'antd';
import { keyBy as _keyBy, get as _get } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectCreateFormSearchCourses,
    selectCreateFormSearchParticipants,
} from '@pages/ContestsCreate/selector';
import { FormikProps, FormikValues } from 'formik';

export const courseSearchSelectOptionRenderer = (
    formik: FormikProps<FormikValues>
) => {
    const courses = useSelector(selectCreateFormSearchCourses);
    return courses.map((course: { uuid: string; name: string }) => (
        <Select.Option key={course.uuid} value={course.uuid}>
            {course.name}
        </Select.Option>
    ));
};

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
