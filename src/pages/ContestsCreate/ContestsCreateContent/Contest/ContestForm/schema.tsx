import React from 'react';
import * as Yup from 'yup';
import moment, { Moment } from 'moment';
import { CloudUploadOutlined } from '@ant-design/icons';
import ContestsCreatePageContentContestSearchParticipantActions from './ContestFormSearch/Participant/actions';
import ContestsCreatePageContentContestSearchCourseActions from './ContestFormSearch/Course/actions';
import {
    AvatarInputWrapper,
    BasicInputWrapper,
    FloatLabelInputWrapper,
    UploadIcon,
} from '@components';
import {
    courseSearchSelectOptionRenderer,
    participantSearchSelectOptionRenderer,
} from './utils';
import { searchSelectTagRenderer } from '@utils';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.CONTESTS_CREATE.FORM;

export const fieldSchema = [
    {
        name: 'sport_uuid',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: AvatarInputWrapper,
        wrapperOptions: {
            valuePropName: 'file',
        },
        options: {
            uploadButtonRenderer: (value: any) => (
                <UploadIcon
                    text={FORM.LABELS.UPLOAD_AVATAR}
                    icon={CloudUploadOutlined}
                    height={128}
                    width={128}
                    value={value}
                />
            ),
        },
    },
    {
        name: 'name',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.NAME,
        },
    },
    {
        name: 'start_time',
        type: 'date-time-picker',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.START_TIME,
        },
        options: {
            format: 'YYYY-MM-DD HH:mm A',
            disabledDate: (current: Moment) =>
                current && current < moment().endOf('day'),
            valueTransform: (value: Moment) => +value,
        },
    },
    {
        name: 'location_uuid',
        type: 'search-select',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.COURSE,
        },
        options: {
            ref: React.createRef<any>(),
            onSearch: (value: string) =>
                ContestsCreatePageContentContestSearchCourseActions.search(
                    value
                ),
            mode: '',
            debounce: 500,
            optionRenderer: courseSearchSelectOptionRenderer,
            tagRenderer: searchSelectTagRenderer,
        },
    },
    {
        name: 'participants',
        type: 'search-select',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PARTICIPANTS,
        },
        options: {
            ref: React.createRef<any>(),
            onSearch: (value: string) =>
                ContestsCreatePageContentContestSearchParticipantActions.search(
                    value
                ),
            mode: 'multiple',
            debounce: 500,
            optionRenderer: participantSearchSelectOptionRenderer,
            tagRenderer: searchSelectTagRenderer,
        },
    },
];

export const validationSchema = Yup.object({
    sport_uuid: Yup.string(),
    name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
    avatar: Yup.string(),
    start_time: Yup.string().required(FORM.VALIDATION.START_TIME_REQUIRED),
    location_uuid: Yup.string().required(FORM.VALIDATION.COURSE_REQUIRED),
    participants: Yup.array(),
});
