import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import _ from 'lodash';
import { AccountFormProps } from './types';
import { Form } from '../../../components';
import AccountActions from '../../../reducers/AccountReducer';
import { fieldSchema, validationSchema } from './schema';
import './AccountForm.scss';

class AccountForm extends React.PureComponent<AccountFormProps> {
    prepareInitialValues = () => {
        const { accountData, authData } = this.props;

        return {
            ..._.pick(accountData, ['first_name', 'last_name']),
            ..._.pick(authData, ['username', 'email']),
        };
    };
    handleSubmit = (values: FormikValues) => {
        console.log(values);
        const { updateAccount } = this.props;
    };
    render() {
        const { accountData } = this.props;
        return (
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={this.prepareInitialValues()}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = ({ auth, account }: any) => {
    return {
        accountData: account.data,
        authData: auth.data,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateAccount(values: FormikValues) {
            return dispatch(AccountActions.updateAccount(values));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);
