import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import AuthActions from '@actions/AuthActions';
import { Form } from '@components';
import { RegisterFormProps } from './types';
import { StateProps } from '../types';
import { fieldSchema, validationSchema } from './schema';
import './RegisterForm.less';

class RegisterForm extends React.PureComponent<RegisterFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { register } = this.props;
        const { email, username, password, display_name, country } = values;
        register(email, username, password, display_name, country);
    };

    render() {
        const { initialValues } = this.props;
        const fieldsSchema = fieldSchema(initialValues);
        return (
            <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                fieldSchema={fieldsSchema}
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
        register(
            email: string,
            username: string,
            password: string,
            display_name: string,
            country: string
        ) {
            return dispatch(
                AuthActions.register(
                    email,
                    username,
                    password,
                    display_name,
                    country
                )
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
