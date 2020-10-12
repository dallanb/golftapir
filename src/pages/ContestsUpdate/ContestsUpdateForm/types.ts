import { FormikValues } from 'formik';

export interface ContestsUpdateFormProps {
    initialValues: any;
    updateContest: (uuid: string, values: FormikValues) => void;
    uuid: string;
}
