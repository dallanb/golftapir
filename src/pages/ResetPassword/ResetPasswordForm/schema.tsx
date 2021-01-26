import React from 'react';
import * as Yup from 'yup';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FloatLabelInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.RESET_PASSWORD.FORM;

export const fieldSchema = [
    {
        name: 'password',
        type: 'password',
        wrapper: FloatLabelInputWrapper,
        options: {},
        wrapperOptions: {
            label: (
                <>
                    <LockOutlined /> {FORM.LABELS.PASSWORD}
                </>
            ),
        },
    },
    {
        name: 'confirm_password',
        type: 'password',
        wrapper: FloatLabelInputWrapper,
        options: {},
        wrapperOptions: {
            label: (
                <>
                    <LockOutlined /> {FORM.LABELS.CONFIRM_PASSWORD}
                </>
            ),
        },
    },
];

export const validationSchema = Yup.object({
    password: Yup.string().required(FORM.VALIDATION.PASSWORD_REQUIRED),
    confirm_password: Yup.string()
        .required(FORM.VALIDATION.CONFIRM_PASSWORD_REQUIRED)
        .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
});
