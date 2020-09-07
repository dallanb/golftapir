import * as Yup from 'yup';
import InputWrapper from '../../../components/InputWrapper';
import CONSTANTS from '../../../locale/en-CA';

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: 'Avatar',
            valuePropName: 'file',
        },
    },
    {
        name: 'username',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: 'Username',
        },
        options: {
            readonly: true,
        },
    },
    {
        name: 'email',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: 'Email',
        },
        options: {
            readonly: true,
        },
    },
    {
        name: 'first_name',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: 'First Name',
        },
        options: {},
    },
    {
        name: 'last_name',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: 'Last Name',
        },
        options: {},
    },
];

export const validationSchema = Yup.object({
    avatar: Yup.string(),
    username: Yup.string(),
    email: Yup.string(),
    first_name: Yup.string()
        .required(CONSTANTS.ACCOUNT.VALIDATION.FIRST_NAME_REQUIRED)
        .max(100, CONSTANTS.ACCOUNT.VALIDATION.FIRST_NAME_MAX_LENGTH),
    last_name: Yup.string()
        .required(CONSTANTS.ACCOUNT.VALIDATION.LAST_NAME_REQUIRED)
        .max(100, CONSTANTS.ACCOUNT.VALIDATION.LAST_NAME_MAX_LENGTH),
});
