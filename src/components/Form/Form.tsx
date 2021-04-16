import {Formik, FormikProps, FormikValues, validateYupSchema, yupToFormErrors} from 'formik';
import React from 'react';
import { Button, Form as AntdForm } from 'antd';
import { isNull as _isNull } from 'lodash';
import defaultFormRenderer from './defaultFormRenderer';
import defaultFieldsRenderer from './defaultFieldsRenderer';
import { FieldsRendererProps, FormProps, FormRendererProps } from './types';
import './Form.less';
import CONSTANTS from '@locale/en-CA';

class Form extends React.Component<FormProps> {
    private readonly formRenderer: FormRendererProps;
    private readonly fieldsRenderer: FieldsRendererProps;

    constructor(props: FormProps) {
        super(props);
        this.formRenderer = props.formRenderer || defaultFormRenderer;
        this.fieldsRenderer = props.fieldsRenderer || defaultFieldsRenderer;
    }

    validate = (value: FormikValues) => {
        try{
            validateYupSchema(value, this.props.validationSchema, true, value)
        } catch (e) {
            return yupToFormErrors(e)
        }
        return {}
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

    renderSubmit = (): JSX.Element | null => {
        const {
            submitButton,
            submitButtonProps = {},
            submitButtonText = CONSTANTS.FORM.SUBMIT,
        } = this.props;

        if (_isNull(submitButton) || submitButton) {
            return submitButton;
        }
        return (
            <AntdForm.Item className="form-submit-button">
                <Button type="primary" htmlType="submit" {...submitButtonProps}>
                    {submitButtonText}
                </Button>
            </AntdForm.Item>
        );
    };

    render() {
        const {
            initialValues,
            onSubmit,
            validateOnBlur = false,
            validateOnChange = false,
            formRef = undefined,
        } = this.props;
        return (
            <Formik
                initialValues={initialValues}
                validate={this.validate}
                onSubmit={onSubmit}
                validateOnBlur={validateOnBlur}
                validateOnChange={validateOnChange}
                innerRef={formRef}
            >
                {(formik: FormikProps<FormikValues>) =>
                    this.prepareForm(formik)
                }
            </Formik>
        );
    }
}

export default Form;
