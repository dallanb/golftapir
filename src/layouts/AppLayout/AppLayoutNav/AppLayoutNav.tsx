import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import classnames from 'classnames';
import { map as _map } from 'lodash';
import { AppLayoutMenuProps } from './types';
import { getMenuSelectedKey, navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import menuItemRenderer from './defaultMenuItemRenderer';
import './AppLayoutNav.less';

const { Header } = Layout;

const AppLayoutNav: React.FunctionComponent<AppLayoutMenuProps> = ({
    app,
    menuRoutes,
    menuProps,
    menuItemOnClick: onClick,
    extra,
}) => {
    const history = useHistory();
    const location = useLocation(); // this is necessary to ensure that updated location result in a rerender of the component

    const menuItemsRenderer = (
        rendererMenuRoutes: any,
        rendererMenuProps: any,
        selectedKeys: string[]
    ) => {
        return rendererMenuRoutes.map((route: any, index: number) =>
            menuItemRenderer({
                index,
                onClick: menuItemOnClick,
                route,
                menuProps: rendererMenuProps,
                selectedKeys,
            })
        );
    };

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

    const menuItemOnClick = ({ key }: { key: any }, path: string) => {
        onClick && onClick({ key }, path);
        setSelectedKeys(key);
        setClickedPath(true);
        navigate(history, path);
    };
    const cx = classnames('app-nav-header', 'app-nav-menu');

    return (
        <Header className={cx}>
            <div
                className="app-nav-title"
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
                className="app-nav-menu"
            >
                {menuItemsRenderer(menuRoutes, menuProps, selectedKeys)}
            </Menu>
            <div className="app-nav-extra">{extra}</div>
        </Header>
    );
};

export default AppLayoutNav;
