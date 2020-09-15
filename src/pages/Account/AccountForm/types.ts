import { FormikValues } from 'formik';
import { AccountContainerInterface } from '@reducers/ui/AccountContainerReducer';
import { AccountInterface } from '@reducers/data/AccountReducer';
import { AuthInterface } from '@reducers/data/AuthReducer';

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
