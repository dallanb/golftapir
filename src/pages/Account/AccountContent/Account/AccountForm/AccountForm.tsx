import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { isEqual as _isEqual, pick as _pick, set as _set } from 'lodash';
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
        const account = Object.entries(
            _pick(values, ['display_name', 'address', 'avatar'])
        ).reduce(
            (accum: any, [key, value]: any) =>
                !_isEqual(value, initialValues[key])
                    ? _set(accum, [key], value)
                    : accum,
            {}
        );
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
