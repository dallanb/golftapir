import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'antd';
import AuthActions from '../../reducers/AuthReducer';
import ModalActions from '../../reducers/ModalReducer';
import { LoginProps } from './types';
import './Login.scss';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.PureComponent<LoginProps> {
    onFinish = (values: any) => {
        const { login } = this.props;
        const { email, password } = values;
        login(email, password);
    };

    onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
        const { setMessageModal } = this.props;
        setMessageModal(true, {
            head: 'Login Failed',
            body: 'Please check your inputted fields',
        });
    };

    render() {
        return (
            <Form
                {...layout}
                name="login"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <h1>Login</h1>
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
        login(email: string, password: string) {
            return dispatch(AuthActions.login(email, password));
        },
        setMessageModal(isOpen: boolean, data: any) {
            return dispatch(ModalActions.setMessageModal(isOpen, data));
        },
    };
};

export default connect(null, mapDispatchToProps)(Login);
