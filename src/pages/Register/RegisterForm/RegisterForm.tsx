import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import AuthActions from '@actions/AuthActions';
import { Form } from '@components';
import { RegisterFormProps } from './types';
import { StateProps } from '../types';
import { fieldSchema, validationSchema } from './schema';
import './RegisterForm.scss';

class RegisterForm extends React.PureComponent<RegisterFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { register } = this.props;
        const { email, username, password } = values;
        register(email, username, password);
    };

    render() {
        const { initialValues } = this.props;
        return (
            <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                fieldSchema={fieldSchema}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = ({ registerPage }: StateProps) => {
    const { formInitialValues: initialValues } = registerPage;
    return {
        initialValues,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        register(email: string, username: string, password: string) {
            return dispatch(AuthActions.register(email, username, password));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
