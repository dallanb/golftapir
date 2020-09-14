const CONSTANTS = {
    ACCOUNT: {
        FORM: {
            LABELS: {
                AVATAR: 'Avatar',
                USERNAME: 'Username',
                EMAIL: 'Email',
                FIRST_NAME: 'First Name',
                LAST_NAME: 'Last Name',
                ADDRESS_LINE_1: 'Address Line 1',
                ADDRESS_LINE_2: 'Address Line 2',
                CITY: 'City',
                PROVINCE: 'Province/State',
                COUNTRY: 'Country',
                POSTAL_CODE: 'Postal Code / Zip Code',
                PHONE_NUMBER: 'Phone Number',
                PHONE_COUNTRY_CODE: 'Phone Country Code',
                PHONE_EXTENSION: 'Phone Extension',
            },
            VALIDATION: {
                FIRST_NAME_MAX_LENGTH:
                    'First Name must be less than 100 characters',
                FIRST_NAME_REQUIRED: 'First Name is required',
                LAST_NAME_MAX_LENGTH:
                    'Last Name must be less than 100 characters',
                LAST_NAME_REQUIRED: 'Last Name is required',
                ADDRESS_LINE_1_REQUIRED: 'Address is required',
                ADDRESS_CITY_REQUIRED: 'City is required',
                ADDRESS_PROVINCE_REQUIRED: 'Province is required',
                ADDRESS_COUNTRY_REQUIRED: 'Country is required',
                ADDRESS_POSTAL_REQUIRED: 'Postal / Zip Code is required',
                PHONE_NUMBER_REQUIRED: 'Phone Number is required',
                PHONE_NUMBER_MATCHES: 'Phone Number is invalid',
            },
        },
        ERROR: {
            UPDATE: 'Error updating Account information',
            UPDATE_AVATAR: 'Error updating Account avatar',
            FETCH: 'Error fetching Account information',
            FETCH_ALL: 'Error fetching Accounts information',
            SEARCH_ALL: 'Error searching Accounts information',
        },
    },
    AUTH: {
        SUCCESS: {
            LOGIN: 'Login successful!',
            REGISTER: 'Registration successful!',
        },
        ERROR: {
            LOGIN: 'Login unsuccessful',
            REGISTER: 'Registration unsuccessful',
            SESSION: 'Session expired',
        },
    },
    CONTEST: {
        SUCCESS: {
            CREATE: 'Contest creation successful!',
        },
        ERROR: {
            FETCH: 'Error fetching Contest information',
            FETCH_ALL: 'Error fetching Contests information',
            CREATE: 'Contest creation unsuccessful',
            FETCH_PARTICIPANTS: 'Error fetch Contest participants information',
        },
    },
};

export default CONSTANTS;
