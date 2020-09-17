import React from 'react';
import * as Yup from 'yup';
import InputWrapper from '@components/InputWrapper';
import CONSTANTS from '@locale/en-CA';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const FORM = CONSTANTS.PAGES.LOGIN.FORM;

export const fieldSchema = [
    {
        name: 'email',
        wrapper: InputWrapper,
        options: {
            prefixRenderer: () => (
                <UserOutlined className="site-form-item-icon" />
            ),
            placeholder: FORM.LABELS.EMAIL,
        },
    },
    {
        name: 'password',
        type: 'password',
        wrapper: InputWrapper,
        options: {
            prefixRenderer: () => (
                <LockOutlined className="site-form-item-icon" />
            ),
            placeholder: FORM.LABELS.PASSWORD,
        },
    },
];

export const validationSchema = Yup.object({
    email: Yup.string().required(FORM.VALIDATION.EMAIL_REQUIRED),
    password: Yup.string().required(FORM.VALIDATION.PASSWORD_REQUIRED),
});
