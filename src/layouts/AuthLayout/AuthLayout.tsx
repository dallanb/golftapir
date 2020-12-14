import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { AuthLayoutProps, AuthLayoutState } from './types';
import './AuthLayout.less';

class AuthLayout extends React.Component<AuthLayoutProps, AuthLayoutState> {
    render() {
        const { children } = this.props;
        return (
            <Layout className="auth-layout-view">
                <div className="auth-layout-title" />
                {children}
            </Layout>
        );
    }
}

export default withRouter(AuthLayout);
