import React from 'react';
import * as Yup from 'yup';
import { CloudUploadOutlined } from '@ant-design/icons/lib';
import {
    BasicInputWrapper,
    FloatLabelInputWrapper,
    ImgCropWrapper,
    NestedInputWrapper,
} from '@components';
import CONSTANTS from '@locale/en-CA';
import constants from '@constants';
import { formatUploadSrc } from './utils';

const FORM = CONSTANTS.PAGES.ACCOUNT.FORM;

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'upload',
        wrapper: ImgCropWrapper,
        wrapperOptions: {
            valuePropName: 'file',
            className: 'account-form-avatar-upload',
            modalTitle: FORM.LABELS.AVATAR_CROPPER_TITLE,
        },
        options: {
            uploadLabel: FORM.LABELS.UPLOAD_AVATAR,
            uploadIcon: CloudUploadOutlined,
            uploadS3Folder: constants.S3_FOLDERS.MEMBER.AVATAR,
            uploadSrcFormatter: formatUploadSrc,
        },
    },
    {
        name: 'input-group',
        wrapper: NestedInputWrapper,
        wrapperOptions: {
            className: 'account-form-input-group',
        },
        options: {},
        fields: [
            {
                name: 'username',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.USERNAME,
                    className: 'account-form-username-input',
                },
                options: {
                    disabled: true,
                },
            },
            {
                name: 'email',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.EMAIL,
                    className: 'account-form-email-input',
                },
                options: {
                    disabled: true,
                },
            },
        ],
    },
    {
        name: 'display_name',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.DISPLAY_NAME,
            className: 'account-form-display-name-input',
        },
        options: {},
    },
    {
        name: 'address.country',
        type: 'country-select',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.COUNTRY,
            className: 'account-form-country-input',
        },
        options: {
            // dependants: ['phone.country_code'],
        },
    },
    {
        name: 'address.line_1',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.ADDRESS_LINE_1,
            hidden: true,
        },
        options: {},
    },
    {
        name: 'address.line_2',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.ADDRESS_LINE_2,
            hidden: true,
        },
        options: {},
    },
    {
        name: 'address.city',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.CITY,
            hidden: true,
        },
        options: {},
    },
    {
        name: 'address.province',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PROVINCE,
            hidden: true,
        },
        options: {},
    },

    {
        name: 'address.postal_code',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.POSTAL_CODE,
            hidden: true,
        },
        options: {},
    },
    {
        name: 'phone.number',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PHONE_NUMBER,
            hidden: true,
        },
        options: {},
    },
    {
        name: 'phone.country_code',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PHONE_COUNTRY_CODE,
            hidden: true,
        },
    },
    {
        name: 'phone.extension',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PHONE_EXTENSION,
            hidden: true,
        },
        options: {},
    },
];

export const validationSchema = Yup.object({
    avatar: Yup.string(),
    username: Yup.string(),
    email: Yup.string(),
    display_name: Yup.string()
        .required(FORM.VALIDATION.DISPLAY_NAME_REQUIRED)
        .max(50, FORM.VALIDATION.DISPLAY_NAME_MAX_LENGTH),
    address: Yup.object({
        line_1: Yup.string().nullable(),
        line_2: Yup.string().nullable(),
        city: Yup.string().nullable(),
        province: Yup.string().nullable(),
        country: Yup.string().required(
            FORM.VALIDATION.ADDRESS_COUNTRY_REQUIRED
        ),
        postal_code: Yup.string().nullable(),
    }),
    phone: Yup.object({
        number: Yup.string()
            .matches(
                /^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                FORM.VALIDATION.PHONE_NUMBER_MATCHES
            )
            .nullable(),
        country_code: Yup.string().nullable(),
        extension: Yup.string().nullable(),
    }),
});
