import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import AuthActions from '@actions/AuthActions';
import { Form } from '@components';
import { LoginFormProps } from './types';
import { StateProps } from '../types';
import { fieldSchema, validationSchema } from './schema';
import './LoginForm.less';
import CONSTANTS from '@locale/en-CA';

class LoginForm extends React.PureComponent<LoginFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { login } = this.props;
        const { email, password } = values;
        login(email, password);
    };

    render() {
        const { initialValues } = this.props;
        return (
            <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                fieldSchema={fieldSchema}
                onSubmit={this.handleSubmit}
                submitButtonText={CONSTANTS.PAGES.LOGIN.FORM.SUBMIT}
                submitButtonProps={{ block: true }}
            />
        );
    }
}

const mapStateToProps = ({ loginPage }: StateProps) => {
    const { formInitialValues: initialValues } = loginPage;
    return {
        initialValues,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        login(email: string, password: string) {
            return dispatch(AuthActions.login(email, password));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
