import { Ref } from 'react';
import { FormikFormProps } from 'formik';

export interface SearchWrapperProps {
    name: string;
    rules?: any;
    children: any;
    childRef: Ref<any>;
    formik: FormikFormProps;
}
