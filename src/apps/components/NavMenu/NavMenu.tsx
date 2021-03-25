import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons/lib';
import { useHistory, useLocation } from 'react-router-dom';
import { map as _map } from 'lodash';
import { NavMenuProps } from './types';
import menuItemRenderer from './defaultMenuItemRenderer';
import { getMenuSelectedKey, navigate } from '@utils';
import './NavMenu.less';

const NavMenu: React.FunctionComponent<NavMenuProps> = ({
    app,
    menuRoutes,
    menuProps,
    menuItemOnClick: onClick,
}) => {
    const mql = window.matchMedia('(max-width: 768px)');
    console.log(mql);
    const popOver = mql.matches;
    console.log(popOver);

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

    return (
        <Menu
            selectedKeys={selectedKeys}
            mode="horizontal"
            overflowedIndicator={<MenuOutlined />}
            // getPopupContainer={(node) => {
            //     console.log(node);
            //     return node;
            // }}
            className="app-nav-menu"
        >
            {menuItemsRenderer(menuRoutes, menuProps, selectedKeys)}
        </Menu>
    );
};

export default NavMenu;
