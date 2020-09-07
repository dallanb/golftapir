import { FormikValues } from 'formik';

export interface FormProps {
    initialValues: any;
    validationSchema: any;
    fieldSchema: any;
    submitButton?: JSX.Element;
    onSubmit: (values: FormikValues) => void;
    formRenderer?: () => any;
    fieldRenderer?: () => any;
}
