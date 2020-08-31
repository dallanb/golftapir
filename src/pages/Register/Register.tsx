import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'antd';
import AuthActions from '../../reducers/AuthReducer';
import ModalActions from '../../reducers/ModalReducer';
import { RegisterProps } from './types';
import './Register.scss';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Register extends PureComponent<RegisterProps> {
    onFinish = (values: any) => {
        const { register } = this.props;
        const { email, username, password } = values;
        register(email, username, password);
    };

    onFinishFailed = (errorInfo: any) => {
        const { setMessageModal } = this.props;
        setMessageModal(true, {
            head: 'Register Failed',
            body: 'Please check your inputted fields',
        });
    };

    render() {
        return (
            <Form
                {...layout}
                name="register"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <h1>Register</h1>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        register(email: string, username: string, password: string) {
            return dispatch(AuthActions.register(email,username,  password));
        },
        setMessageModal(isOpen: boolean, data: any) {
            return dispatch(ModalActions.setMessageModal(isOpen, data));
        },
    };
};

export default connect(null, mapDispatchToProps)(Register);
