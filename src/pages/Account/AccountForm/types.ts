import { FormikValues } from 'formik';
import { AccountContainerInterface } from '../reducer';
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
        ui: AccountContainerInterface;
        data: { account: AccountInterface; auth: AuthInterface };
    };
}
