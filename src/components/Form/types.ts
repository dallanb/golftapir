export interface FormProps {
    initialValues: any;
    validationSchema: any;
    fieldSchema: any;
    onSubmit: () => any;
    formRenderer?: () => any;
    fieldRenderer?: () => any;
}
