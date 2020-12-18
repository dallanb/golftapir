import React from 'react';
import * as Yup from 'yup';
import { GlobalOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import InputWrapper from '@components/InputWrapper';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.REGISTER.FORM;

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
        name: 'username',
        wrapper: InputWrapper,
        options: {
            prefixRenderer: () => (
                <UserOutlined className="site-form-item-icon" />
            ),
            placeholder: FORM.LABELS.USERNAME,
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
    {
        name: 'confirm_password',
        type: 'password',
        wrapper: InputWrapper,
        options: {
            prefixRenderer: () => (
                <LockOutlined className="site-form-item-icon" />
            ),
            placeholder: FORM.LABELS.CONFIRM_PASSWORD,
        },
    },
    {
        name: 'display_name',
        wrapper: InputWrapper,
        options: {
            prefixRenderer: () => (
                <UserOutlined className="site-form-item-icon" />
            ),
            placeholder: FORM.LABELS.DISPLAY_NAME,
        },
    },
    {
        name: 'country',
        type: 'country-select',
        wrapper: InputWrapper,
        options: {
            prefixRenderer: () => (
                <GlobalOutlined className="site-form-item-icon" />
            ),
            placeholder: FORM.LABELS.COUNTRY,
        },
    },
];

export const validationSchema = Yup.object({
    email: Yup.string().required(FORM.VALIDATION.EMAIL_REQUIRED),
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
