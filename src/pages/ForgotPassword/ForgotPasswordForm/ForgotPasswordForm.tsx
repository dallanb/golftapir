import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import AuthActions from '@actions/AuthActions';
import { Form } from '@components';
import { ForgotPasswordFormProps } from './types';
import { fieldSchema, validationSchema } from './schema';
import CONSTANTS from '@locale/en-CA';
import { selectFormInitialValues } from '../selector';
import './ForgotPasswordForm.less';

const ForgotPasswordForm: React.FunctionComponent<ForgotPasswordFormProps> = () => {
    const dispatch = useDispatch();
    const initialValues = useSelector(selectFormInitialValues);
    const handleSubmit = (values: FormikValues) => {
        const { email } = values;
        dispatch(AuthActions.forgotPassword(email));
    };

    return (
        <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            fieldSchema={fieldSchema}
            onSubmit={handleSubmit}
            submitButtonText={CONSTANTS.PAGES.FORGOT_PASSWORD.FORM.SUBMIT}
            submitButtonProps={{ block: true }}
        />
    );
};

export default ForgotPasswordForm;
