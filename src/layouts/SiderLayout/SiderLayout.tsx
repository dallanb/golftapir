import React from 'react';
import { Layout } from 'antd';
import { SiderLayoutProps } from './types';
import './SiderLayout.less';
import classnames from 'classnames';

const { Content, Sider } = Layout;

const SiderLayout: React.FunctionComponent<SiderLayoutProps> = ({
    content,
    className,
}) => {
    const renderContent = () => {
        if (!content) {
            return null;
        }
        return content;
    };

    const cx = classnames('sider-layout', className);
    return (
        <Sider
            width={350}
            className={cx}
            breakpoint={'lg'}
            collapsedWidth="0"
            trigger={null}
        >
            <Layout className="sider-layout-background">
                <Content className="sider-layout-content">
                    {renderContent()}
                </Content>
            </Layout>
        </Sider>
    );
};

export default SiderLayout;
