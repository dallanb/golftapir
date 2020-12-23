import { Formik, FormikProps, FormikValues } from 'formik';
import React from 'react';
import { Button, Form as AntdForm } from 'antd';
import defaultFormRenderer from './defaultFormRenderer';
import defaultFieldsRenderer from './defaultFieldsRenderer';
import { FieldsRendererProps, FormProps, FormRendererProps } from './types';
import './Form.less';

class Form extends React.Component<FormProps> {
    private readonly formRenderer: FormRendererProps;
    private readonly fieldsRenderer: FieldsRendererProps;

    constructor(props: FormProps) {
        super(props);
        this.formRenderer = props.formRenderer || defaultFormRenderer;
        this.fieldsRenderer = props.fieldRenderer || defaultFieldsRenderer;
    }

    prepareForm = (formik: FormikProps<FormikValues>): JSX.Element => {
        const { fieldSchema, initialValues } = this.props;
        const fields = this.fieldsRenderer(formik, fieldSchema);
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
            <AntdForm.Item className="form-submit-button">
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
