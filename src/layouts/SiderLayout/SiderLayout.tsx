import React from 'react';
import { Layout } from 'antd';
import { SiderLayoutProps } from './types';
import './SiderLayout.scss';

const { Content, Sider } = Layout;

const SiderLayout: React.FunctionComponent<SiderLayoutProps> = ({
    header,
    content,
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
    return (
        <Sider width={300} className={`sider-layout`}>
            <Layout className="sider-layout-background">
                {renderHeader()}
                <Content className="sider-layout-content">
                    {renderContent()}
                </Content>
            </Layout>
        </Sider>
    );
};

export default SiderLayout;
