import { FormikValues } from 'formik';
import { ContestsCreatePageInterface } from '../reducer';
import { AuthInterface } from '@reducers/AuthReducer';

export interface ContestsCreateFormProps {
    authData: any;
    createContest: (values: FormikValues) => void;
}

export interface StateInterface {
    contestsCreatePage: {
        ui: ContestsCreatePageInterface;
        data: { auth: AuthInterface };
    };
}
