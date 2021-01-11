import React from 'react';
import * as Yup from 'yup';
import { CloudUploadOutlined } from '@ant-design/icons/lib';
import {
    FloatLabelInputWrapper,
    ImgCropWrapper,
    NestedInputWrapper,
} from '@components';
import CONSTANTS from '@locale/en-CA';
import constants from '@constants';

const FORM = CONSTANTS.PAGES.MEMBER_SETTINGS.FORM;

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: ImgCropWrapper,
        wrapperOptions: {
            valuePropName: 'file',
            className: 'member-form-avatar-upload',
            modalTitle: FORM.LABELS.AVATAR_CROPPER_TITLE,
        },
        options: {
            uploadLabel: FORM.LABELS.UPLOAD_AVATAR,
            uploadIcon: CloudUploadOutlined,
            uploadS3Folder: constants.S3_FOLDERS.MEMBER.AVATAR,
        },
    },
    {
        name: 'input-group',
        wrapper: NestedInputWrapper,
        wrapperOptions: {
            className: 'member-form-input-group',
        },
        options: {},
        fields: [
            {
                name: 'username',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.USERNAME,
                    className: 'member-form-username-input',
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
                    className: 'member-form-email-input',
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
            className: 'member-form-display-name-input',
        },
        options: {},
    },
    {
        name: 'country',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.COUNTRY,
            className: 'member-form-country-input',
        },
        options: {
            disabled: true,
        },
    },
];

export const validationSchema = Yup.object({
    avatar: Yup.string(),
    display_name: Yup.string()
        .required(FORM.VALIDATION.DISPLAY_NAME_REQUIRED)
        .max(50, FORM.VALIDATION.DISPLAY_NAME_MAX_LENGTH),
});
