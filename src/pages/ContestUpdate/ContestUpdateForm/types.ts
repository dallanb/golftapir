import { FormikValues } from 'formik';

export interface ContestUpdateFormProps {
    initialValues: any;
    updateContest: (uuid: string, values: FormikValues) => void;
    uuid: string;
}
