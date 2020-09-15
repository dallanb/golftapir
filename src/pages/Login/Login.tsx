import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthActions, { AuthInterface } from '@reducers/AuthReducer';
import ModalActions from '@reducers/ModalReducer';
import { LoginProps } from './types';
import './Login.scss';

class Login extends React.PureComponent<LoginProps> {
    componentDidMount() {
        const { isLoggedIn, history } = this.props;
        if (isLoggedIn) {
            history.push('/app/home');
        }
    }

    componentDidUpdate(prevProps: Readonly<LoginProps>) {
        const { isLoggedIn, history } = this.props;
        if (isLoggedIn) {
            history.push('/app/home');
        }
    }

    onFinish = (values: any) => {
        const { login } = this.props;
        const { email, password } = values;
        login(email, password);
    };

    onFinishFailed = (errorInfo: any) => {
        const { setMessageModal } = this.props;
        setMessageModal(true, {
            head: 'Login Failed',
            body: 'Please check your inputted fields',
        });
    };

    render() {
        return (
            <div className="login-view">
                <Form
                    name="login"
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

const mapStateToProps = ({ auth }: { auth: AuthInterface }) => {
    return {
        isLoggedIn: _.get(auth, ['isLoggedIn'], false),
    };
};

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

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Login);
