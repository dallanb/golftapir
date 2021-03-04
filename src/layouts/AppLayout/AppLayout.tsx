import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { AppLayoutProps } from './types';
import defaultMenuItemRenderer from './defaultMenuItemRenderer';
import { getMenuSelectedKey, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import { map as _map } from 'lodash';
import { navigate } from '@utils';
import './AppLayout.less';

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
    const location = useLocation(); // this is necessary to ensure that updated location result in a rerender of the component

    const [selectedKeys, setSelectedKeys] = useState(['0']);
    const [clickedPath, setClickedPath] = useState(false); // this flag will help us avoid extra work when finding the selectedKeys

    useEffect(() => {
        if (clickedPath) {
            setClickedPath(false);
        } else {
            setSelectedKeys(
                getMenuSelectedKey(
                    location.pathname,
                    app,
                    _map(menuRoutes, 'key')
                )
            );
        }
    }, [location.pathname]);

    const menuItemRenderer = menuItemRendererProp || defaultMenuItemRenderer;

    const menuItemOnClick = ({ key }: { key: any }, path: string) => {
        onClick && onClick({ key }, path);
        setSelectedKeys(key);
        setClickedPath(true);
        navigate(history, path);
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
                        navigate(
                            history,
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

export default AppLayout;
