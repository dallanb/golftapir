import { Ref } from 'react';
import { FormikProps, FormikValues } from 'formik';

export interface SearchWrapperProps {
    name: string;
    rules?: any;
    children: any;
    childRef: Ref<any>;
    formik: FormikProps<FormikValues>;
}
