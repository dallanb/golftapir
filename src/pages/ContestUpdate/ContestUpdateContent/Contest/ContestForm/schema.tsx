import * as Yup from 'yup';
import moment, { Moment } from 'moment';
import {
    BasicInputWrapper,
    FloatLabelInputWrapper,
    NestedInputWrapper,
} from '@components';
import CONSTANTS from '@locale/en-CA';
import { CloudUploadOutlined } from '@ant-design/icons/lib';
import constants from '@constants';
import { withS3URL } from '@utils';

const FORM = CONSTANTS.PAGES.CONTEST_UPDATE.FORM;

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            valuePropName: 'file',
            className: 'contest-update-form-avatar-upload',
        },
        options: {
            uploadLabel: FORM.LABELS.UPLOAD_AVATAR,
            uploadIcon: CloudUploadOutlined,
            uploadS3Folder: constants.S3_FOLDERS.CONTEST.AVATAR,
            uploadSrcFormatter: (
                value: string,
                options: { s3Folder: string }
            ) => withS3URL(value, options.s3Folder),
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
                    valueTransform: (value: Moment) => +value,
                    className: 'contest-date-time-picker',
                },
            },
        ],
    },
];

export const validationSchema = Yup.object({
    name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
    avatar: Yup.string(),
    start_time: Yup.string().required(FORM.VALIDATION.START_TIME_REQUIRED),
});
