import React from 'react';
import * as Yup from 'yup';
import { FloatLabelInputWrapper, NestedInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';
import { courseHoleLabelMaker, courseHolesButtonsRenderer } from './utils';

const FORM = CONSTANTS.PAGES.COURSES_CREATE.FORM;
export const fieldSchema = [
    {
        name: 'name',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.NAME,
            className: 'course-form-name-input',
        },
        options: {},
    },
    {
        name: 'line_1',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.ADDRESS_LINE_1,
            className: 'course-form-line-1-input',
        },
        options: {},
    },
    {
        name: 'line_2',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.ADDRESS_LINE_2,
            className: 'course-form-line-2-input',
        },
        options: {},
    },
    {
        name: 'city',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.CITY,
            className: 'course-form-city-input',
        },
        options: {},
    },
    {
        name: 'province',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PROVINCE,
            className: 'course-form-province-input',
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
    {
        name: 'holes',
        type: 'dynamic-input',
        options: {
            fieldWrapper: NestedInputWrapper,
            fieldWrapperOptions: {
                className: 'course-form-input-group',
            },
            fieldFields: [
                {
                    name: 'hole',
                    wrapper: FloatLabelInputWrapper,
                    wrapperOptions: {
                        label: courseHoleLabelMaker,
                        className: 'course-form-hole-input',
                        hidden: true,
                    },
                    type: 'number',
                    options: {
                        formatter: (value: number) => value,
                        className: 'course-hole-input',
                    },
                    className: '',
                },
                {
                    name: 'par',
                    wrapper: FloatLabelInputWrapper,
                    wrapperOptions: {
                        label: courseHoleLabelMaker,
                        className: 'course-form-par-input',
                    },
                    type: 'number',
                    options: {
                        formatter: (value: number) => value,
                        className: 'course-par-input',
                    },
                    className: '',
                },
                {
                    name: 'distance',
                    wrapper: FloatLabelInputWrapper,
                    wrapperOptions: {
                        label: courseHoleLabelMaker,
                        className: 'course-form-distance-input',
                    },
                    type: 'number',
                    options: {
                        formatter: (value: number) => value,
                        className: 'course-distance-input',
                    },
                    className: '',
                },
            ],
            buttonsRenderer: courseHolesButtonsRenderer,
            className: 'course-dynamic-hole-input',
        },
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
    holes: Yup.array().of(
        Yup.object().shape({
            hole: Yup.number(),
            distance: Yup.number(),
            par: Yup.number(),
        })
    ),
});
