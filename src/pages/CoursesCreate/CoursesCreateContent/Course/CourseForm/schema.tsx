import React from 'react';
import * as Yup from 'yup';
import { BasicInputWrapper, FloatLabelInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.COURSES_CREATE.FORM;
export const fieldSchema = [
    {
        name: 'name',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.NAME,
        },
        options: {},
    },
    {
        name: 'line_1',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.ADDRESS_LINE_1,
        },
        options: {},
    },
    {
        name: 'line_2',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.ADDRESS_LINE_2,
        },
        options: {},
    },
    {
        name: 'city',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.CITY,
        },
        options: {},
    },
    {
        name: 'province',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PROVINCE,
        },
        options: {},
    },
    {
        name: 'country',
        type: 'country-select',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.COUNTRY,
            className: 'course-form-country-input',
        },
        options: {},
    },
];

export const validationSchema = Yup.object({
    name: Yup.string()
        .required(FORM.VALIDATION.NAME_REQUIRED)
        .max(50, FORM.VALIDATION.NAME_MAX_LENGTH),
    line_1: Yup.string().nullable(),
    line_2: Yup.string().nullable(),
    city: Yup.string().nullable(),
    province: Yup.string().nullable(),
    country: Yup.string().required(FORM.VALIDATION.COUNTRY_REQUIRED),
});
