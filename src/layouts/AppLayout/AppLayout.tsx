import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { AppLayoutProps } from './types';
import defaultMenuItemRenderer from './defaultMenuItemRenderer';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import { navigator } from '@utils';
import './AppLayout.less';

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
        navigator(history, path);
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
        <Layout className="member-app-layout-view">
            <Sider className="member-app-sider-layout">
                <div
                    className="member-app-sider-layout-title"
                    onClick={() =>
                        navigator(
                            history,
                            withAppRoute(routes.ROUTES.HOME.ROUTE, {
                                app: constants.APPS.MEMBER_APP,
                            })
                        )
                    }
                />
                <Menu
                    theme="dark"
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
