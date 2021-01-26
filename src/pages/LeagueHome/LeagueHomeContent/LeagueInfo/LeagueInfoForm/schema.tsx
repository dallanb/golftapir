import React from 'react';
import { Badge } from 'antd';
import * as Yup from 'yup';
import { FloatLabelInputWrapper, NestedInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';
import constants from '@constants';
import {FormikFormProps} from "formik";
import {mapStatusColour} from "@utils";

const FORM = CONSTANTS.PAGES.LEAGUE_HOME.FORM;

export const fieldSchema = [
    {
        name: 'avatar.s3_filename',
        type: 'avatar',
        options: {
            s3Folder: constants.S3_FOLDERS.LEAGUE.AVATAR,
            avatarNameKey: 'name',
            shape: 'square',
            size: 112,
            className: 'league-info-form-avatar',
        },
    },
    {
        name: 'input-group',
        wrapper: NestedInputWrapper,
        wrapperOptions: {
            className: 'league-info-form-input-group',
        },
        options: {},
        fields: [
            // {
            //     name: 'username',
            //     wrapper: FloatLabelInputWrapper,
            //     wrapperOptions: {
            //         label: FORM.LABELS.USERNAME,
            //         className: 'league-info-form-username-input',
            //     },
            //     options: {
            //         readonly: true,
            //         bordered: false,
            //     },
            // },
            {
                name: 'name',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.NAME,
                    className: 'league-info-form-name-input',
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
                    className: 'league-info-form-created-at-input',
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
                    className: 'league-info-form-status-input',
                },
                options: {
                    readonly: true,
                    bordered: false,
                    prefixRenderer: (formik: FormikFormProps, data: {key: string, value: any}) => (
                        <Badge
                            color={mapStatusColour(data.value)}
                            className="league-info-form-status"
                        />
                    ),
                },
            },
        ],
    },
];

export const validationSchema = Yup.object({});
