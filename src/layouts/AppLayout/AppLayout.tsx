import React from 'react';
import { Layout } from 'antd';
import AppLayoutMenu from './AppLayoutMenu';
import { AppLayoutProps } from './types';
import './AppLayout.less';

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({
    children,
    ...restProps
}) => {
    return (
        <Layout className="member-app-layout-view glassmorphic">
            <AppLayoutMenu {...restProps} />
            {children}
        </Layout>
    );
};

export default AppLayout;
