import React from 'react';
import { Layout } from 'antd';
import { SiderLayoutProps } from './types';
import './SiderLayout.less';
import classnames from 'classnames';

const { Content, Sider } = Layout;

const SiderLayout: React.FunctionComponent<SiderLayoutProps> = ({
    header,
    content,
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
    const cx = classnames('sider-layout', className);
    return (
        <Sider width={350} className={cx}>
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
