import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { AuthLayoutProps } from './types';
import './AuthLayout.less';

const { Content } = Layout;

const AuthLayout: React.FunctionComponent<AuthLayoutProps> = ({ children }) => {
    return (
        <Layout className="auth-layout-view glassmorphic">
            <Content className="auth-layout-view-content">
                <div className="auth-layout-title-wrapper">
                    <div className="auth-layout-title" />
                </div>
                <div className="auth-layout-content">{children}</div>
            </Content>
        </Layout>
    );
};

export default withRouter(AuthLayout);
