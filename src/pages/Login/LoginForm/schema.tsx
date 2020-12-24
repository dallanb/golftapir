import React from 'react';
import * as Yup from 'yup';
import { BasicInputWrapper, FloatLabelInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const FORM = CONSTANTS.PAGES.LOGIN.FORM;

export const fieldSchema = [
    {
        name: 'email',
        wrapper: FloatLabelInputWrapper,
        options: {},
        wrapperOptions: {
            label: (
                <>
                    <UserOutlined /> {FORM.LABELS.EMAIL}
                </>
            ),
        },
    },
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
];

export const validationSchema = Yup.object({
    email: Yup.string().required(FORM.VALIDATION.EMAIL_REQUIRED),
    password: Yup.string().required(FORM.VALIDATION.PASSWORD_REQUIRED),
});
