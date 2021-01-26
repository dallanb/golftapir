import React from 'react';
import * as Yup from 'yup';
import { UserOutlined } from '@ant-design/icons';
import { FloatLabelInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.FORGOT_PASSWORD.FORM;

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
];

export const validationSchema = Yup.object({
    email: Yup.string()
        .required(FORM.VALIDATION.EMAIL_REQUIRED)
        .email(FORM.VALIDATION.EMAIL_TYPE),
});
