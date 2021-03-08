import React from 'react';
import * as Yup from 'yup';
import moment, { Moment } from 'moment';
import { get as _get, isNil as _isNil } from 'lodash';
import { CloudUploadOutlined } from '@ant-design/icons';
import ContestsCreatePageContentContestSearchParticipantActions from './ContestFormSearch/Participant/actions';
import ContestsCreatePageContentContestSearchCourseActions from './ContestFormSearch/Course/actions';
import {
    BasicInputWrapper,
    FloatLabelInputWrapper,
    ImgCropWrapper,
    NestedInputWrapper,
} from '@components';
import {
    contestBuyInParser,
    contestPayoutButtonsRenderer,
    contestPayoutInParser,
    contestPayoutLabelMaker,
    courseSearchSelectOptionRenderer,
    participantSearchSelectOptionRenderer,
} from './utils';
import { searchSelectTagRenderer } from '@utils';
import CONSTANTS from '@locale/en-CA';
import constants from '@constants';

const FORM = CONSTANTS.PAGES.CONTESTS_CREATE.FORM;

export const fieldSchema = [
    {
        name: 'league_uuid',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'sport_uuid',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'avatar',
        type: 'upload',
        wrapper: ImgCropWrapper,
        wrapperOptions: {
            valuePropName: 'file',
            className: 'contest-form-avatar-upload',
            modalTitle: FORM.LABELS.AVATAR_CROPPER_TITLE,
        },
        options: {
            uploadLabel: FORM.LABELS.UPLOAD_AVATAR,
            uploadIcon: CloudUploadOutlined,
            uploadS3Folder: constants.S3_FOLDERS.CONTEST.AVATAR,
        },
    },
    {
        name: 'input-group',
        wrapper: NestedInputWrapper,
        wrapperOptions: {
            className: 'contest-form-input-group',
        },
        options: {},
        fields: [
            {
                name: 'name',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.NAME,
                    className: 'contest-form-name-input',
                },
            },
            {
                name: 'start_time',
                type: 'date-time-picker',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.START_TIME,
                    className: 'contest-form-start-time-input',
                },
                options: {
                    format: 'YYYY-MM-DD HH:mm A',
                    disabledDate: (current: Moment) =>
                        current && current < moment().endOf('day'),
                    valueTransform: (value: Moment) => value && +value,
                    className: 'contest-date-time-picker',
                },
            },
        ],
    },
    {
        name: 'location_uuid',
        type: 'search-select',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.COURSE,
            className: 'contest-form-location-input',
        },
        options: {
            ref: React.createRef<any>(),
            onSearch: (value: string) =>
                ContestsCreatePageContentContestSearchCourseActions.search(
                    value
                ),
            mode: '',
            debounce: 500,
            optionRenderer: courseSearchSelectOptionRenderer,
            tagRenderer: searchSelectTagRenderer,
        },
    },
    {
        name: 'participants',
        type: 'search-select',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PARTICIPANTS,
            className: 'contest-form-participants-input',
        },
        options: {
            ref: React.createRef<any>(),
            onSearch: (value: string) =>
                ContestsCreatePageContentContestSearchParticipantActions.search(
                    value
                ),
            mode: 'multiple',
            debounce: 500,
            optionRenderer: participantSearchSelectOptionRenderer,
            tagRenderer: searchSelectTagRenderer,
        },
    },
    {
        name: 'buy_in',
        type: 'number',
        wrapper: FloatLabelInputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.BUY_IN,
            className: 'contest-form-buy-in-input',
        },
        options: {
            formatter: (value: string) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            parser: contestBuyInParser,
            min: 0,
            className: 'contest-buy-in-input',
        },
    },
    {
        name: 'payout',
        type: 'dynamic-input',
        options: {
            fieldWrapper: FloatLabelInputWrapper,
            fieldWrapperOptions: {
                label: contestPayoutLabelMaker,
                className: 'contest-form-payout-input',
            },
            fieldType: 'number',
            fieldOptions: {
                formatter: (value: number) => `${value}%`,
                parser: contestPayoutInParser,
                max: 100,
                min: 0,
                className: 'contest-payout-input',
            },
            buttonsRenderer: contestPayoutButtonsRenderer,
            className: 'contest-dynamic-payout-input',
        },
    },
];

export const validationSchema = (walletBalance: number) =>
    Yup.object({
        sport_uuid: Yup.string(),
        name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
        avatar: Yup.string(),
        start_time: Yup.string()
            .required(FORM.VALIDATION.START_TIME_REQUIRED)
            .nullable(),
        location_uuid: Yup.string().required(FORM.VALIDATION.COURSE_REQUIRED),
        participants: Yup.array(),
        buy_in: Yup.number().when('participants', {
            is: (val) => val.length == 1,
            then: Yup.number().max(
                0,
                FORM.VALIDATION.BUY_IN_SINGLE_PARTICIPANT
            ),
            otherwise: Yup.number()
                .required(FORM.VALIDATION.BUY_IN_REQUIRED)
                .max(walletBalance, FORM.VALIDATION.BUY_IN_WALLET_LIMIT),
        }),
        payout: Yup.array()
            .required(FORM.VALIDATION.PAYOUT_REQUIRED)
            .of(
                Yup.number().test(
                    'payout-100',
                    FORM.VALIDATION.PAYOUT_100,
                    function () {
                        const values = _get(this, ['parent']);
                        if (!_isNil(values)) {
                            return (
                                values.reduce((a: any, b: any) => a + b, 0) ===
                                100
                            );
                        }
                        return false;
                    }
                )
            ),
    });
