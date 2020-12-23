import { FormikProps, FormikValues } from 'formik';
import { FormEvent } from 'react';

export interface FormProps {
    initialValues: any;
    validationSchema: any;
    fieldSchema: any;
    submitButton?: JSX.Element;
    onSubmit: (values: FormikValues) => void;
    formRenderer?: FormRendererProps;
    fieldsRenderer?: () => any;
}

export interface FormRendererProps {
    (
        initialValues: any,
        fields: JSX.Element,
        handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void,
        submitComponent: JSX.Element
    ): JSX.Element;
}

export interface FieldsRendererProps {
    (formik: FormikProps<FormikValues>, schema: any): JSX.Element;
}
