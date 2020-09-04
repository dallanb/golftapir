import { Formik } from 'formik';
import React from 'react';
import defaultFormRenderer from './defaultFormRenderer';
import defaultFieldRenderer from './defaultFieldRenderer';
import { FormProps } from './types';

class Form extends React.Component<FormProps> {
    private readonly formRenderer: any;
    private readonly fieldRenderer: any;

    constructor(props: FormProps) {
        super(props);
        this.formRenderer = props.formRenderer || defaultFormRenderer;
        this.fieldRenderer = props.fieldRenderer || defaultFieldRenderer;
    }

    prepareForm = () => {
        const { fieldSchema } = this.props;
        const fields = this.fieldRenderer(fieldSchema);

        return this.formRenderer(fields);
    };

    render() {
        const { initialValues, validationSchema, onSubmit } = this.props;
        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {this.prepareForm()}
            </Formik>
        );
    }
}

export default Form;
