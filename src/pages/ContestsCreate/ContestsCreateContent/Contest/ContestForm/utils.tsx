import { Select } from 'antd';
import { keyBy as _keyBy, get as _get, isNil as _isNil } from 'lodash';
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
        'uuid'
    );
    return Object.values(participants).map(
        (participant: { uuid: string; display_name: string }) => (
            <Select.Option
                key={participant.uuid}
                value={participant.uuid}
                disabled={
                    permanentParticipants.findIndex(
                        ({ member_uuid }: { member_uuid: string }) =>
                            member_uuid === participant.uuid
                    ) > -1
                }
            >
                {participant.display_name}
            </Select.Option>
        )
    );
};

export const contestBuyInParser = (value: string) => {
    if (value === '$') {
        return 0;
    } else {
        return value.replace(/\$\s?|(,*)/g, '');
    }
};
