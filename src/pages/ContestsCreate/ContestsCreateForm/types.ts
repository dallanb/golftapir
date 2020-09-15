import { FormikValues } from 'formik';

export interface ContestsCreateFormProps {
    authData: any;
    createContest: (values: FormikValues) => void;
}
