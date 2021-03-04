import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { AppLayoutProps } from './types';
import defaultMenuItemRenderer from './defaultMenuItemRenderer';
import { getMenuSelectedKey, withAppRoute } from '@utils';
import routes from '@constants/routes';
import './AppLayout.less';
import constants from '@constants';
import { map as _map } from 'lodash';

const { Sider } = Layout;

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({
    app,
    name,
    avatar,
    menuRoutes,
    menuProps,
    menuItemRenderer: menuItemRendererProp,
    menuItemOnClick: onClick,
    children,
}) => {
    const history = useHistory();
    const [selectedKeys, setSelectedKeys] = useState(['0']);

    useEffect(() => {
        setSelectedKeys(
            getMenuSelectedKey(
                history.location.pathname,
                app,
                _map(menuRoutes, 'key')
            )
        );
    }, [history.location.pathname]);

    const menuItemRenderer = menuItemRendererProp || defaultMenuItemRenderer;

    const menuItemOnClick = ({ key }: { key: any }, path: string) => {
        onClick && onClick({ key }, path);
        setSelectedKeys(key);
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
        <Layout className="member-app-layout-view">
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

export default AppLayout;
