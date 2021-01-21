import React from 'react';
import * as Yup from 'yup';
import { BasicInputWrapper, FloatLabelInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.MEMBERS_CREATE.FORM;

export const fieldSchema = [
    {
        name: 'league_uuid',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'email',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.EMAIL,
            className: 'member-form-email-input',
        },
        options: {},
    },
];

export const validationSchema = Yup.object({
    league_uuid: Yup.string(),
    email: Yup.string()
        .required(FORM.VALIDATION.EMAIL_REQUIRED)
        .email(FORM.VALIDATION.EMAIL_TYPE),
});
