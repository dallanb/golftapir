import * as Yup from 'yup';
import InputWrapper from '@components/InputWrapper';
import CONSTANTS from '@locale/en-CA';
import moment, { Moment } from 'moment';

const FORM = CONSTANTS.PAGES.CONTEST_UPDATE.FORM;

export const fieldSchema = [
    {
        name: 'name',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.NAME,
        },
    },
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.AVATAR,
            valuePropName: 'file',
        },
    },
    {
        name: 'start_time',
        type: 'date-time-picker',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.START_TIME,
        },
        options: {
            format: 'YYYY-MM-DD HH:mm A',
            disabledDate: (current: Moment) =>
                current && current < moment().endOf('day'),
            valueTransform: (value: Moment) => +value,
        },
    },
];

export const validationSchema = Yup.object({
    name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
    avatar: Yup.string(),
    start_time: Yup.string().required(FORM.VALIDATION.START_TIME_REQUIRED),
});
