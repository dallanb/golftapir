import { pick as _pick } from 'lodash';

export const prepareInitialValues = (memberData: any) => {
    return {
        ..._pick(memberData, [
            'uuid',
            'display_name',
            'username',
            'email',
            'avatar',
            'country',
        ]),
    };
};
