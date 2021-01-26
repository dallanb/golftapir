import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import AuthActions from '@actions/AuthActions';
import { Form } from '@components';
import { ResetPasswordFormProps } from './types';
import { fieldSchema, validationSchema } from './schema';
import CONSTANTS from '@locale/en-CA';
import { selectFormInitialValues } from '../selector';
import './ResetPasswordForm.less';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';

const ResetPasswordForm: React.FunctionComponent<ResetPasswordFormProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const initialValues = useSelector(selectFormInitialValues);

    const handleSubmit = (values: FormikValues) => {
        const search = _get(history, ['location', 'search'], '');
        const params = new URLSearchParams(search);
        const token = params.get('token');
        const { password } = values;
        dispatch(AuthActions.resetPassword(token, password));
    };

    return (
        <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            fieldSchema={fieldSchema}
            onSubmit={handleSubmit}
            submitButtonText={CONSTANTS.PAGES.RESET_PASSWORD.FORM.SUBMIT}
            submitButtonProps={{ block: true }}
        />
    );
};

export default ResetPasswordForm;
