import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { isEqual as _isEqual } from 'lodash';
import { AccountFormProps } from './types';
import { Form } from '@components';
import { AccountActions } from '@actions';
import AccountPageContentAccountActions from '@actions/AccountActions';
import { fieldSchema, validationSchema } from './schema';
import { selectAccount } from '@pages/Account/selector';
import { selectData as selectAccountFormData } from '../selector';
import './AccountForm.scss';

const AccountForm: React.FunctionComponent<AccountFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectAccountFormData);
    const { account } = useSelector(selectAccount);

    const handleSubmit = (values: FormikValues) => {
        const { first_name, last_name, address, phone, avatar } = values;
        if (!_isEqual(avatar, account.avatar)) {
            dispatch(AccountActions.assignAvatar('me', avatar)); // TODO: Should this be moved to a local call?
        }
        dispatch(
            AccountPageContentAccountActions.updateAccount({
                first_name,
                last_name,
                address,
                phone,
            })
        );
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
