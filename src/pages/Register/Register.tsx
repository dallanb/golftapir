import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthActions from '@actions/AuthActions';
import ModalActions from '@reducers/ModalReducer';
import { RegisterProps, StateProps } from './types';
import './Register.scss';

class Register extends React.PureComponent<RegisterProps> {
    componentDidMount() {
        const { isLoggedIn, history } = this.props;
        if (isLoggedIn) {
            history.push('/app/home');
        }
    }

    componentDidUpdate(prevProps: Readonly<RegisterProps>) {
        const { isLoggedIn, history } = this.props;
        if (isLoggedIn) {
            history.push('/app/home');
        }
    }

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
            <div className="register-view">
                <Form
                    name="register"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email address!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item className="form-item-submit">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }: StateProps) => {
    const { isLoggedIn } = auth;
    return {
        isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        register(email: string, username: string, password: string) {
            return dispatch(AuthActions.register(email, username, password));
        },
        setMessageModal(isOpen: boolean, data: any) {
            return dispatch(ModalActions.setMessageModal(isOpen, data));
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Register);
