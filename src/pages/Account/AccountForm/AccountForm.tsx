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
            ..._.pick(accountData, ['first_name', 'last_name', 'avatar']),
            address: _.pick(accountData.address, [
                'city',
                'country',
                'line_1',
                'line_2',
                'postal_code',
                'province',
            ]),
            phone: _.pick(accountData.phone, [
                'number',
                'country_code',
                'extension',
            ]),
            ..._.pick(authData, ['username', 'email']),
        };
    };
    handleSubmit = (values: FormikValues) => {
        const { updateAccount, updateAvatar, accountData } = this.props;
        const { first_name, last_name, address, phone, avatar } = values;
        if (!_.isEqual(avatar, accountData.avatar)) {
            updateAvatar(avatar);
        }
        updateAccount({ first_name, last_name, address, phone });
    };
    render() {
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
            return dispatch(AccountActions.updateAccount('me', values));
        },
        updateAvatar(avatar: File) {
            return dispatch(AccountActions.updateAvatar('me', avatar));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);
