import { FormikValues } from 'formik';
import { AccountPageInterface } from '../reducer';
import { AccountInterface } from '@reducers/AccountReducer';
import { AuthInterface } from '@reducers/AuthReducer';

export interface AccountFormProps {
    accountData: any;
    authData: any;
    updateAccount: (values: FormikValues) => any;
    updateAvatar: (avatar: File) => any;
}

export interface StateInterface {
    accountPage: {
        ui: AccountPageInterface;
        data: { account: AccountInterface; auth: AuthInterface };
    };
}
