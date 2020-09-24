import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import {isEqual as _isEqual } from 'lodash';
import { AccountFormProps, StateInterface } from './types';
import { Form } from '@components';
import AccountActions from '@actions/AccountActions';
import { fieldSchema, validationSchema } from './schema';
import './AccountForm.scss';

class AccountForm extends React.PureComponent<AccountFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { updateAccount, updateAvatar, data } = this.props;
        const { first_name, last_name, address, phone, avatar } = values;
        if (!_isEqual(avatar, data.avatar)) {
            updateAvatar(avatar);
        }
        updateAccount({ first_name, last_name, address, phone });
    };
    render() {
        const { initialValues } = this.props;
        return (
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = ({ accountPage }: StateInterface) => {
    const { updateFormInitialValues: initialValues, data } = accountPage;
    return {
        data,
        initialValues,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateAccount(values: FormikValues) {
            return dispatch(AccountActions.updateAccount('me', values));
        },
        updateAvatar(avatar: File) {
            return dispatch(AccountActions.updateAvatar('me', avatar));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);
