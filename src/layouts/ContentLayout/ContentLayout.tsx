import React from 'react';
import { Layout, Spin } from 'antd';
import { ContentLayoutProps } from './types';
import './ContentLayout.scss';

const { Content, Footer } = Layout;

const ContentLayout: React.FunctionComponent<ContentLayoutProps> = ({
    header,
    content,
    sider,
    showSpinner,
    className,
}) => {
    const renderHeader = () => {
        if (!header) {
            return null;
        }
        return header;
    };

    const renderContent = () => {
        if (!content) {
            return null;
        }
        return content;
    };

    const renderSider = () => {
        if (!sider) {
            return null;
        }
        return sider;
    };

    if (showSpinner) {
        return <Spin />;
    }

    return (
        <Layout className="content-layout">
            <Layout className="content-layout-body content-layout-background">
                <Layout className="content-layout-main">
                    {renderHeader()}
                    <Content className={`content-layout-content ${className}`}>
                        {renderContent()}
                    </Content>
                </Layout>
                {renderSider()}
            </Layout>

            <Footer className="footer">
                Tech Tapir ©2020 Created by Dallan Bhatti
            </Footer>
        </Layout>
    );
};

export default ContentLayout;
