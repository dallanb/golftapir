import React from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import moment, { Moment } from 'moment';
import ContestsCreatePageActions from '../actions';
import InputWrapper from '@components/InputWrapper';
import {
    courseSearchSelectOptionRenderer,
    participantSearchSelectOptionRenderer,
} from './utils';
import { searchSelectTagRenderer } from '@utils';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.CONTESTS_CREATE.FORM;

export const fieldSchema = [
    {
        name: 'owner_uuid',
        wrapper: InputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'sport_uuid',
        wrapper: InputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'name',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.NAME,
        },
    },
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.AVATAR,
            valuePropName: 'file',
        },
    },
    {
        name: 'start_time',
        type: 'date-time-picker',
        wrapper: InputWrapper,
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
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.COURSE,
        },
        options: {
            ref: React.createRef<any>(),
            onSearch: (value: string) =>
                ContestsCreatePageActions.searchCourses(value),
            mode: '',
            debounce: 500,
            optionRenderer: courseSearchSelectOptionRenderer,
            tagRenderer: searchSelectTagRenderer,
        },
    },
    {
        name: 'participants',
        type: 'search-select',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PARTICIPANTS,
        },
        options: {
            ref: React.createRef<any>(),
            onSearch: (value: string) =>
                ContestsCreatePageActions.searchParticipants(value),
            mode: 'multiple',
            debounce: 500,
            optionRenderer: participantSearchSelectOptionRenderer,
            tagRenderer: searchSelectTagRenderer,
        },
    },
];

export const validationSchema = Yup.object({
    owner_uuid: Yup.string(),
    sport_uuid: Yup.string(),
    name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
    avatar: Yup.string(),
    start_time: Yup.string().required(FORM.VALIDATION.START_TIME_REQUIRED),
    location_uuid: Yup.string().required(FORM.VALIDATION.COURSE_REQUIRED),
    participants: Yup.array(),
});
