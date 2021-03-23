import React from 'react';
import { Layout, Menu } from 'antd';
import { AppLayoutMenuNavProps } from './types';
import menuItemRenderer from './defaultMenuItemRenderer';
import './AppLayoutMenuNav.less';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';

const { Header } = Layout;

const AppLayoutMenuNav: React.FunctionComponent<AppLayoutMenuNavProps> = ({
    selectedKeys,
    menuRoutes,
    menuProps,
    menuItemOnClick,
}) => {
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
        <Header className="member-app-nav-header">
            <div
                className="member-app-nav-title"
                onClick={() =>
                    navigate(
                        history,
                        withAppRoute(routes.ROUTES.HOME.ROUTE, {
                            app: constants.APPS.MEMBER_APP,
                        })
                    )
                }
            />
            <Menu
                selectedKeys={selectedKeys}
                mode="horizontal"
                className="member-app-nav-menu"
            >
                {menuItemsRenderer(menuRoutes, menuProps)}
            </Menu>
        </Header>
    );
};

export default AppLayoutMenuNav;
