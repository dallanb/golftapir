import { FormikValues } from 'formik';
import { ContestsCreateContainerInterface } from '@reducers/ui/ContestsCreateContainerReducer';
import { AuthInterface } from '@reducers/data/AuthReducer';

export interface ContestsCreateFormProps {
    authData: any;
    createContest: (values: FormikValues) => void;
}

export interface StateInterface {
    contestsCreatePage: {
        ui: ContestsCreateContainerInterface;
        data: { auth: AuthInterface };
    };
}
