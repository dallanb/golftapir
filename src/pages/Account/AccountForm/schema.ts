import * as Yup from 'yup';
import InputWrapper from '../../../components/InputWrapper';

export const fieldSchema = [
    // {
    //     name: 'avatar',
    //     type: 'avatar',
    // },
    {
        name: 'username',
        label: 'Username',
        wrapper: InputWrapper,
        options: {
            readonly: true,
        },
    },
    {
        name: 'email',
        label: 'Email',
        wrapper: InputWrapper,
        options: {
            readonly: true,
        },
    },
    {
        name: 'first_name',
        label: 'First Name',
        wrapper: InputWrapper,
        options: {},
    },
    {
        name: 'last_name',
        label: 'Last Name',
        wrapper: InputWrapper,
        options: {},
    },
];

export const validationSchema = Yup.object({
    avatar: Yup.string(),
    username: Yup.string(),
    email: Yup.string(),
    first_name: Yup.string(),
    last_name: Yup.string(),
});
