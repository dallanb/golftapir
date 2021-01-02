import { Select } from 'antd';
import { keyBy as _keyBy, get as _get } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { FormikProps, FormikValues } from 'formik';
import { selectSearchData as selectParticipantSearchData } from './ContestFormSearch/Participant/selector';
import { selectSearchData as selectCourseSearchData } from './ContestFormSearch/Course/selector';

export const courseSearchSelectOptionRenderer = (
    formik: FormikProps<FormikValues>
) => {
    const courses = useSelector(selectCourseSearchData) || [];
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
    const participantSearch = useSelector(selectParticipantSearchData) || [];
    const participants = _keyBy(
        [...participantSearch, ...permanentParticipants],
        'member_uuid'
    );
    return Object.values(participants).map(
        (participant: { member_uuid: string; display_name: string }) => (
            <Select.Option
                key={participant.member_uuid}
                value={participant.member_uuid}
                disabled={
                    permanentParticipants.findIndex(
                        ({ member_uuid }: { member_uuid: string }) =>
                            member_uuid === participant.member_uuid
                    ) > -1
                }
            >
                {participant.display_name}
            </Select.Option>
        )
    );
};
