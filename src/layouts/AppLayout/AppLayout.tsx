import React from 'react';
import { Layout } from 'antd';
import AppLayoutNav from './AppLayoutNav';
import { AppLayoutProps } from './types';
import './AppLayout.less';

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({ children }) => {
    return (
        <Layout className="member-app-layout-view glassmorphic">
            {children}
        </Layout>
    );
};

export default AppLayout;
