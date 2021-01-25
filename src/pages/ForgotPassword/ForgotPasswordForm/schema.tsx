import React from 'react';
import * as Yup from 'yup';
import memoize from 'memoize-one';
import { get as _get } from 'lodash';
import { UserOutlined } from '@ant-design/icons';
import { FloatLabelInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.FORGOT_PASSWORD.FORM;

export const fieldSchema = memoize((initialValues: any) => [
    {
        name: 'email',
        wrapper: FloatLabelInputWrapper,
        options: {
            disabled: _get(initialValues, ['email'], false),
        },
        wrapperOptions: {
            label: (
                <>
                    <UserOutlined /> {FORM.LABELS.EMAIL}
                </>
            ),
        },
    },
]);

export const validationSchema = Yup.object({
    email: Yup.string()
        .required(FORM.VALIDATION.EMAIL_REQUIRED)
        .email(FORM.VALIDATION.EMAIL_TYPE),
});
