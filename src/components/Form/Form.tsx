import { Formik, FormikProps, FormikValues } from 'formik';
import React from 'react';
import { Button, Form as AntdForm } from 'antd';
import defaultFormRenderer from './defaultFormRenderer';
import defaultFieldRenderer from './defaultFieldRenderer';
import { FieldRendererProps, FormProps, FormRendererProps } from './types';

class Form extends React.Component<FormProps> {
    private readonly formRenderer: FormRendererProps;
    private readonly fieldRenderer: FieldRendererProps;

    constructor(props: FormProps) {
        super(props);
        this.formRenderer = props.formRenderer || defaultFormRenderer;
        this.fieldRenderer = props.fieldRenderer || defaultFieldRenderer;
    }

    prepareForm = (formik: FormikProps<FormikValues>): JSX.Element => {
        const { fieldSchema, initialValues } = this.props;
        const fields = this.fieldRenderer(fieldSchema, formik);
        const submitComponent = this.renderSubmit();
        return this.formRenderer(
            initialValues,
            fields,
            formik.handleSubmit,
            submitComponent
        );
    };

    renderSubmit = (): JSX.Element => {
        const { submitButton } = this.props;
        if (submitButton) {
            return submitButton;
        }
        return (
            <AntdForm.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </AntdForm.Item>
        );
    };

    render() {
        const { initialValues, validationSchema, onSubmit } = this.props;
        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik: FormikProps<FormikValues>) =>
                    this.prepareForm(formik)
                }
            </Formik>
        );
    }
}

export default Form;
