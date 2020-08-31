import React from 'react';
import { Layout, Menu } from 'antd';
import memoize from 'memoize-one';
import { AppLayoutProps, AppLayoutState } from './types';
import appRoutes from '../../routes/AppRoutes';
import './AppLayout.scss';
import { IconTitle } from '../../components';

const { Content, Footer, Sider } = Layout;

class AppLayout extends React.PureComponent<AppLayoutProps, AppLayoutState> {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    getMenuItems = memoize(() => {
        return appRoutes.map((appRoute, index) => (
            <Menu.Item key={index} icon={React.createElement(appRoute.icon)}>
                {appRoute.name}
            </Menu.Item>
        ));
    });

    render() {
        const { children } = this.props;
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
                            {children}
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
