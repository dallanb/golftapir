import { FormikValues } from 'formik';

export interface CreateContestFormProps {
    authData: any;
    createContest: (values: FormikValues) => void;
}
