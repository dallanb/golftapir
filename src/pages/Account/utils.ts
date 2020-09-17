import _ from 'lodash';

export const prepareInitialValues = (accountData: any, authData: any) => {
    return {
        ..._.pick(accountData, ['first_name', 'last_name', 'avatar']),
        address: _.pick(accountData.address, [
            'city',
            'country',
            'line_1',
            'line_2',
            'postal_code',
            'province',
        ]),
        phone: _.pick(accountData.phone, [
            'number',
            'country_code',
            'extension',
        ]),
        ..._.pick(authData, ['username', 'email']),
    };
};
