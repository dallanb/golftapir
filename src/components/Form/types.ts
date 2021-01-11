import { FormikProps, FormikValues } from 'formik';
import { FormEvent } from 'react';

export interface FormProps {
    initialValues: any;
    validationSchema: any;
    fieldSchema: any;
    submitButton?: JSX.Element | null;
    onSubmit: (values: FormikValues) => void;
    formRenderer?: FormRendererProps;
    fieldsRenderer?: () => any;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
}

export interface FormRendererProps {
    (
        initialValues: any,
        fields: JSX.Element,
        handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void,
        submitComponent: JSX.Element | null
    ): JSX.Element;
}

export interface FieldsRendererProps {
    (formik: FormikProps<FormikValues>, schema: any): JSX.Element;
}
