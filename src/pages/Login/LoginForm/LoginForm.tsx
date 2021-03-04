import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import AuthActions from '@actions/AuthActions';
import { Form } from '@components';
import { LoginFormProps } from './types';
import { fieldSchema, validationSchema } from './schema';
import CONSTANTS from '@locale/en-CA';
import { selectFormInitialValues } from '../selector';
import './LoginForm.less';

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
    const dispatch = useDispatch();
    const initialValues = useSelector(selectFormInitialValues);

    const handleSubmit = (values: FormikValues) => {
        const { email, password } = values;
        dispatch(AuthActions.login(email, password));
    };

    return (
        <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            fieldSchema={fieldSchema}
            onSubmit={handleSubmit}
            submitButtonText={CONSTANTS.PAGES.LOGIN.FORM.SUBMIT}
            submitButtonProps={{ block: true }}
        />
    );
};

export default LoginForm;
