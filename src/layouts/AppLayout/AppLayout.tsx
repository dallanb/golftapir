import React from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import memoize from 'memoize-one';
import { AppLayoutProps, AppLayoutState } from './types';
import appRoutes from '../../routes/AppRoutes';
import { navigateTo } from '../../routes/history';
import './AppLayout.scss';

const { Content, Footer, Sider } = Layout;

class AppLayout extends React.PureComponent<AppLayoutProps, AppLayoutState> {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    onClick = (path: string) => {
        console.log(path);
        navigateTo(path);
    };

    getMenuItems = memoize(() => {
        return appRoutes.map((appRoute, index) => (
            <Menu.Item
                key={index}
                icon={React.createElement(appRoute.icon)}
                onClick={() => this.onClick(appRoute.path)}
            >
                {appRoute.name}
            </Menu.Item>
        ));
    });

    render() {
        const { title, subTitle, children } = this.props;
        const { collapsed } = this.state;
        return (
            <Layout className="app-layout-view">
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                    className="sider-layout"
                >
                    <div className="sider-layout-title" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['0']}
                        mode="inline"
                    >
                        {this.getMenuItems()}
                    </Menu>
                </Sider>
                <Layout className="content-layout">
                    <Content className="content-layout-content">
                        <div className="content-layout-background">
                            <PageHeader title={title} subTitle={subTitle} />
                            <div className="content-layout-children">
                                {children}
                            </div>
                        </div>
                    </Content>
                    <Footer className="footer">
                        Tech Tapir ©2020 Created by Dallan Bhatti
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default AppLayout;
