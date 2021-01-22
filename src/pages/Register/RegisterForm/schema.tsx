import React from 'react';
import * as Yup from 'yup';
import memoize from 'memoize-one';
import { get as _get } from 'lodash';
import { GlobalOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { FloatLabelInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.REGISTER.FORM;

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
    {
        name: 'username',
        wrapper: FloatLabelInputWrapper,
        options: {},
        wrapperOptions: {
            label: (
                <>
                    <UserOutlined /> {FORM.LABELS.USERNAME}
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
    {
        name: 'display_name',
        wrapper: FloatLabelInputWrapper,
        options: {},
        wrapperOptions: {
            label: (
                <>
                    <UserOutlined /> {FORM.LABELS.DISPLAY_NAME}
                </>
            ),
        },
    },
    {
        name: 'country',
        type: 'country-select',
        wrapper: FloatLabelInputWrapper,
        options: {},
        wrapperOptions: {
            label: (
                <>
                    <GlobalOutlined /> {FORM.LABELS.COUNTRY}
                </>
            ),
        },
    },
]);

export const validationSchema = Yup.object({
    email: Yup.string()
        .required(FORM.VALIDATION.EMAIL_REQUIRED)
        .email(FORM.VALIDATION.EMAIL_TYPE),
    username: Yup.string().required(FORM.VALIDATION.USERNAME_REQUIRED),
    password: Yup.string().required(FORM.VALIDATION.PASSWORD_REQUIRED),
    confirm_password: Yup.string()
        .required(FORM.VALIDATION.CONFIRM_PASSWORD_REQUIRED)
        .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
    display_name: Yup.string()
        .required(FORM.VALIDATION.DISPLAY_NAME_REQUIRED)
        .max(100, FORM.VALIDATION.DISPLAY_NAME_MAX_LENGTH),
    country: Yup.string().required(FORM.VALIDATION.COUNTRY_REQUIRED),
});
