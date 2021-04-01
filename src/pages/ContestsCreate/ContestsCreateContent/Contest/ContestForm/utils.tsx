import React from 'react';
import { FormikProps, FormikValues } from 'formik';
import { useSelector } from 'react-redux';
import { Button, Select } from 'antd';
import { keyBy as _keyBy, get as _get } from 'lodash';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import {
    selectSearchData as selectParticipantSearchData,
    selectSearchIsSearching as selectParticipantSearchIsSearching,
} from './ContestFormSearch/Participant/selector';
import {
    selectSearchData as selectCourseSearchData,
    selectSearchIsSearching as selectCourseSearchIsSearching,
} from './ContestFormSearch/Course/selector';
import { ordinalSuffix } from '@utils';
import { MemberTile } from '@components';
import CONSTANTS from '@locale/en-CA';

export const courseSearchSelectOptionRenderer = () => {
    const courses = useSelector(selectCourseSearchData) || [];
    return courses.map((course: { uuid: string; name: string }) => (
        <Select.Option key={course.uuid} value={course.uuid}>
            {course.name}
        </Select.Option>
    ));
};
export const courseLoadingRenderer = (formik: FormikProps<FormikValues>) =>
    useSelector(selectCourseSearchIsSearching);

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
        (participant: {
            member: string;
            display_name: string;
            uuid: string;
        }) => (
            <Select.Option
                key={participant.member}
                value={participant.member}
                disabled={
                    permanentParticipants.findIndex(
                        ({ uuid }: { uuid: string }) => {
                            return uuid === participant.uuid;
                        }
                    ) > -1
                }
            >
                <MemberTile member={participant} />
            </Select.Option>
        )
    );
};

export const participantLoadingRenderer = (formik: FormikProps<FormikValues>) =>
    useSelector(selectParticipantSearchIsSearching);

export const contestBuyInParser = (value: string) => {
    if (value === '$') {
        return 0;
    } else {
        return value.replace(/\$\s?|(,*)/g, '');
    }
};

export const contestPayoutInParser = (value: string) => {
    if (value === '%') {
        return 0;
    } else {
        return value.replace('%', '');
    }
};

export const contestPayoutLabelMaker = ({ name, value }: any) => {
    const place = parseInt(name[1]) + 1;
    return `${ordinalSuffix(place)} ${CONSTANTS.COMMON.PLACE.toLowerCase()} ${
        CONSTANTS.PAGES.CONTESTS_CREATE.FORM.LABELS.PAYOUT
    }`;
};

export const contestPayoutButtonsRenderer = ({
    value,
    formik,
    arrayHelpers,
}: any) => {
    const participants = _get(formik, ['values', 'participants'], []);
    return (
        <div className="contest-form-payout-dynamic-input-buttons">
            <Button
                disabled={value.length === 1}
                onClick={() => arrayHelpers.remove(value.length - 1)}
                type="text"
                icon={<MinusCircleTwoTone />}
                style={{ height: '24px', width: '24px' }}
            />
            <Button
                disabled={participants.length <= value.length}
                onClick={() => arrayHelpers.insert(value.length, 0)}
                type="text"
                icon={<PlusCircleTwoTone />}
                style={{ height: '24px', width: '24px' }}
            />
        </div>
    );
};
