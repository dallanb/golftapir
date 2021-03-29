import React from 'react';
import { Layout, Spin } from 'antd';
import { ContentLayoutProps } from './types';
import './ContentLayout.less';

const { Content } = Layout;

const ContentLayout: React.FunctionComponent<ContentLayoutProps> = ({
    header,
    content,
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

    if (showSpinner) {
        return <Spin />;
    }

    return (
        <Layout className="content-layout-main">
            {renderHeader()}
            <Content className={`content-layout-content ${className}`}>
                {renderContent()}
            </Content>
        </Layout>
    );
};

export default ContentLayout;
