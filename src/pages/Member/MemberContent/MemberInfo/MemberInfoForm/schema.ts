import React from 'react';
import * as Yup from 'yup';
import {
    BasicInputWrapper,
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
        options: {
            s3Folder: constants.S3_FOLDERS.MEMBER.AVATAR,
            shape: 'square',
            size: 112,
            className: 'member-info-form-avatar',
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
                    readonly: true,
                    bordered: false,
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
                    readonly: true,
                    bordered: false,
                },
            },
            {
                name: 'display_name',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.DISPLAY_NAME,
                    className: 'member-info-form-display-name-input',
                },
                options: {
                    readonly: true,
                    bordered: false,
                },
            },
            {
                name: 'country',
                type: 'flag',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.COUNTRY,
                    className: 'member-info-form-country-input',
                },
                options: {
                    readonly: true,
                    bordered: false,
                },
            },
        ],
    },
];

export const validationSchema = Yup.object({});
