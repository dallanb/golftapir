import { FormikValues } from 'formik';
import { AccountPageInterface } from '../reducer';

export interface AccountFormProps {
    data: any;
    initialValues: any;
    updateAccount: (values: FormikValues) => any;
    updateAvatar: (avatar: File) => any;
}

export interface StateInterface {
    accountPage: AccountPageInterface;
}
