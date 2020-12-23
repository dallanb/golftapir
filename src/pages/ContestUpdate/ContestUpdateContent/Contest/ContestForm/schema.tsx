import * as Yup from 'yup';
import moment, { Moment } from 'moment';
import {
    BasicInputWrapper,
    FloatLabelInputWrapper,
    ImgCropWrapper,
    NestedInputWrapper,
} from '@components';
import CONSTANTS from '@locale/en-CA';
import { CloudUploadOutlined } from '@ant-design/icons/lib';
import constants from '@constants';
import { formatUploadSrc } from '../utils';

const FORM = CONSTANTS.PAGES.CONTEST_UPDATE.FORM;

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: ImgCropWrapper,
        wrapperOptions: {
            valuePropName: 'file',
            className: 'contest-update-form-avatar-upload',
        },
        options: {
            uploadLabel: FORM.LABELS.UPLOAD_AVATAR,
            uploadIcon: CloudUploadOutlined,
            uploadS3Folder: constants.S3_FOLDERS.CONTEST.AVATAR,
            uploadSrcFormatter: formatUploadSrc,
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
