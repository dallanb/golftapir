import * as Yup from 'yup';

export const fieldSchema = [
    // {
    //     name: 'avatar',
    //     type: 'avatar',
    // },
    {
        name: 'username',
        options: {
            readonly: true,
        },
    },
    {
        name: 'email',
        options: {
            readonly: true,
        },
    },
    {
        name: 'first_name',
        options: {},
    },
    {
        name: 'last_name',
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
