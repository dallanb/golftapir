import React from 'react';
import { ContentLayoutProps, ContentLayoutState } from './types';
import { Layout, PageHeader } from 'antd';
import './ContentLayout.scss';

const { Content, Footer } = Layout;

class ContentLayout extends React.Component<
    ContentLayoutProps,
    ContentLayoutState
> {
    render() {
        const { title, subTitle, children } = this.props;
        return (
            <Layout className="content-layout">
                <Content className="content-layout-content">
                    <div className="content-layout-background">
                        {title && (
                            <PageHeader title={title} subTitle={subTitle} />
                        )}
                        <div className="content-layout-children">
                            {children}
                        </div>
                    </div>
                </Content>
                <Footer className="footer">
                    Tech Tapir ©2020 Created by Dallan Bhatti
                </Footer>
            </Layout>
        );
    }
}

export default ContentLayout;
