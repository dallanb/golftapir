import { FormikValues } from 'formik';

export interface ContestsCreateFormProps {
    initialValues: any;
    createContest: (values: FormikValues) => void;
}

