import * as Yup from 'yup';
import InputWrapper from '@components/InputWrapper';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.ACCOUNT.FORM;

export const fieldSchema = [
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
        name: 'username',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.USERNAME,
        },
        options: {
            readonly: true,
        },
    },
    {
        name: 'email',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.EMAIL,
        },
        options: {
            readonly: true,
        },
    },
    {
        name: 'first_name',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.FIRST_NAME,
        },
        options: {},
    },
    {
        name: 'last_name',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.LAST_NAME,
        },
        options: {},
    },
    {
        name: 'address.line_1',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.ADDRESS_LINE_1,
        },
        options: {},
    },
    {
        name: 'address.line_2',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.ADDRESS_LINE_2,
        },
        options: {},
    },
    {
        name: 'address.city',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.CITY,
        },
        options: {},
    },
    {
        name: 'address.province',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PROVINCE,
        },
        options: {},
    },
    {
        name: 'address.country',
        type: 'country-select',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.COUNTRY,
        },
        options: {
            dependants: ['phone.country_code'],
        },
    },
    {
        name: 'address.postal_code',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.POSTAL_CODE,
        },
        options: {},
    },
    {
        name: 'phone.number',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PHONE_NUMBER,
        },
        options: {},
    },
    {
        name: 'phone.country_code',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PHONE_COUNTRY_CODE,
            hidden: true,
        },
    },
    {
        name: 'phone.extension',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PHONE_EXTENSION,
        },
        options: {},
    },
];

export const validationSchema = Yup.object({
    avatar: Yup.string(),
    username: Yup.string(),
    email: Yup.string(),
    first_name: Yup.string()
        .required(FORM.VALIDATION.FIRST_NAME_REQUIRED)
        .max(100, FORM.VALIDATION.FIRST_NAME_MAX_LENGTH),
    last_name: Yup.string()
        .required(FORM.VALIDATION.LAST_NAME_REQUIRED)
        .max(100, FORM.VALIDATION.LAST_NAME_MAX_LENGTH),
    address: Yup.object({
        line_1: Yup.string().required(FORM.VALIDATION.ADDRESS_LINE_1_REQUIRED),
        line_2: Yup.string().nullable(),
        city: Yup.string().required(FORM.VALIDATION.ADDRESS_CITY_REQUIRED),
        province: Yup.string().required(
            FORM.VALIDATION.ADDRESS_PROVINCE_REQUIRED
        ),
        country: Yup.string().required(
            FORM.VALIDATION.ADDRESS_COUNTRY_REQUIRED
        ),
        postal_code: Yup.string().required(
            FORM.VALIDATION.ADDRESS_POSTAL_REQUIRED
        ),
    }),
    phone: Yup.object({
        number: Yup.string()
            .matches(
                /^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                FORM.VALIDATION.PHONE_NUMBER_MATCHES
            )
            .required(FORM.VALIDATION.PHONE_NUMBER_REQUIRED),
        country_code: Yup.string(),
        extension: Yup.string().nullable(),
    }),
});
