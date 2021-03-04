import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { Form } from '@components';
import { RegisterFormProps } from './types';
import { fieldSchema, validationSchema } from './schema';
import CONSTANTS from '@locale/en-CA';
import { selectFormInitialValues } from '../selector';
import { AuthActions } from '@actions';
import './RegisterForm.less';

const RegisterForm: React.FunctionComponent<RegisterFormProps> = () => {
    const dispatch = useDispatch();
    const initialValues = useSelector(selectFormInitialValues);
    const fieldsSchema = fieldSchema(initialValues);

    const handleSubmit = (values: FormikValues) => {
        const {
            email,
            username,
            password,
            display_name,
            country,
            token,
        } = values;
        dispatch(
            AuthActions
                .register
                // email,
                // username,
                // password,
                // display_name,
                // country,
                // token
                ()
        );
    };

    return (
        <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            fieldSchema={fieldsSchema}
            onSubmit={handleSubmit}
            submitButtonText={CONSTANTS.PAGES.REGISTER.FORM.SUBMIT}
            submitButtonProps={{ block: true }}
        />
    );
};

export default RegisterForm;
