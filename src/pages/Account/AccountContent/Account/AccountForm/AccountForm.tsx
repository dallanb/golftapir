import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { pick as _pick } from 'lodash';
import { AccountFormProps } from './types';
import { Form } from '@components';
import AccountPageContentAccountActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectAccountFormData } from '../selector';
import './AccountForm.less';

const AccountForm: React.FunctionComponent<AccountFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectAccountFormData);

    const handleSubmit = (values: FormikValues) => {
        const account = _pick(values, ['display_name', 'address', 'avatar']);
        dispatch(AccountPageContentAccountActions.submit(account));
    };
    return (
        <div className="account-form">
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default AccountForm;
