import React from 'react';
import { Badge } from 'antd';
import * as Yup from 'yup';
import { FloatLabelInputWrapper, NestedInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';
import constants from '@constants';
import { FormikFormProps } from 'formik';
import { mapStatusColour } from '@utils';

const FORM = CONSTANTS.PAGES.CONTEST.FORM;

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'avatar',
        options: {
            s3Folder: constants.S3_FOLDERS.CONTEST.AVATAR,
            avatarNameKey: 'name',
            shape: 'square',
            size: 112,
            className: 'contest-info-form-avatar',
        },
    },
    {
        name: 'input-group',
        wrapper: NestedInputWrapper,
        wrapperOptions: {
            className: 'contest-info-form-input-group',
        },
        options: {},
        fields: [
            {
                name: 'name',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.NAME,
                    className: 'contest-info-form-name-input',
                },
                options: {
                    readonly: true,
                    bordered: false,
                },
            },
            {
                name: 'ctime',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.CREATED_AT,
                    className: 'contest-info-form-created-at-input',
                },
                options: {
                    readonly: true,
                    bordered: false,
                },
            },
            {
                name: 'status',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.STATUS,
                    className: 'contest-info-form-status-input',
                },
                options: {
                    readonly: true,
                    bordered: false,
                    prefixRenderer: (
                        formik: FormikFormProps,
                        data: { key: string; value: any }
                    ) => (
                        <Badge
                            color={mapStatusColour(data.value)}
                            className="contest-info-form-status"
                        />
                    ),
                },
            },
            {
                name: 'payout',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.PAYOUT,
                    className: 'contest-info-form-payout-input',
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
