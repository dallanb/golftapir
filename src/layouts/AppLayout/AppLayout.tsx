import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { AppLayoutProps } from './types';
import defaultMenuItemRenderer from './defaultMenuItemRenderer';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import './AppLayout.less';
import constants from '@constants';

const { Sider } = Layout;

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({
    app,
    name,
    avatar,
    menuRoutes,
    menuProps,
    menuItemRenderer: menuItemRendererProp,
    history,
    menuItemOnClick: onClick,
    selectedKeys,
    children,
}) => {
    const menuItemRenderer = menuItemRendererProp || defaultMenuItemRenderer;

    const menuItemOnClick = ({ key }: { key: any }, path: string) => {
        onClick && onClick({ key }, path);
        history.push(path);
    };

    const menuItemsRenderer = (
        rendererMenuRoutes: any,
        rendererMenuProps: any
    ) => {
        return rendererMenuRoutes.map((route: any, index: number) =>
            menuItemRenderer({
                index,
                onClick: menuItemOnClick,
                route,
                menuProps: rendererMenuProps,
            })
        );
    };

    return (
        <Layout className="member-app-layout-view glassmorphic">
            <Sider className="member-app-sider-layout">
                <div
                    className="member-app-sider-layout-title"
                    onClick={() =>
                        history.push(
                            withAppRoute(routes.ROUTES.HOME.ROUTE, {
                                app: constants.APPS.MEMBER_APP,
                            })
                        )
                    }
                />
                <Menu
                    theme="light"
                    defaultSelectedKeys={['0']}
                    selectedKeys={selectedKeys}
                    className="member-app-sider-layout-menu"
                    mode="inline"
                >
                    {menuItemsRenderer(menuRoutes, menuProps)}
                </Menu>
            </Sider>
            {children}
        </Layout>
    );
};

export default withRouter(AppLayout);
