import { FormikValues } from 'formik';

export interface AccountFormProps {
    accountData: any;
    authData: any;
    updateAccount: (values: FormikValues) => any;
}
