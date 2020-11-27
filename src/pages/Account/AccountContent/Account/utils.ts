import { pick as _pick } from 'lodash';

export const prepareInitialValues = (accountData: any) => {
    return {
        ..._pick(accountData, [
            'username',
            'email',
            'first_name',
            'last_name',
            'avatar',
        ]),
        address: _pick(accountData.address, [
            'city',
            'country',
            'line_1',
            'line_2',
            'postal_code',
            'province',
        ]),
        phone: _pick(accountData.phone, [
            'number',
            'country_code',
            'extension',
        ]),
    };
};
