import React from 'react';
import * as Yup from 'yup';
import {
    FloatLabelInputWrapper,
    ImgCropWrapper,
    NestedInputWrapper,
} from '@components';
import CONSTANTS from '@locale/en-CA';
import constants from '@constants';

const FORM = CONSTANTS.PAGES.MEMBER.FORM;

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: ImgCropWrapper,
        wrapperOptions: {
            valuePropName: 'file',
            className: 'member-info-form-avatar-upload',
        },
        options: {
            readOnly: true,
            uploadS3Folder: constants.S3_FOLDERS.MEMBER.AVATAR,
        },
    },
    {
        name: 'input-group',
        wrapper: NestedInputWrapper,
        wrapperOptions: {
            className: 'member-info-form-input-group',
        },
        options: {},
        fields: [
            {
                name: 'username',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.USERNAME,
                    className: 'member-info-form-username-input',
                },
                options: {
                    readOnly: true,
                },
            },
            {
                name: 'email',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.EMAIL,
                    className: 'member-info-form-email-input',
                },
                options: {
                    readOnly: true,
                },
            },
        ],
    },
    {
        name: 'display_name',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.DISPLAY_NAME,
            className: 'member-info-form-display-name-input',
        },
        options: {
            readOnly: true,
        },
    },
    {
        name: 'country',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.COUNTRY,
            className: 'member-info-form-country-input',
        },
        options: {
            readOnly: true,
        },
    },
];

export const validationSchema = Yup.object({});
