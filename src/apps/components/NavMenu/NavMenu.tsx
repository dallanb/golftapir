import React, { useEffect, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons/lib';
import { useHistory, useLocation } from 'react-router-dom';
import { map as _map } from 'lodash';
import { NavMenuProps } from './types';
import fullMenuItemRenderer from './fullMenuItemRenderer';
import collapsedMenuItemRenderer from './collapsedMenuItemRenderer';
import { getMenuSelectedKey, navigate } from '@utils';
import './NavMenu.less';

const NavMenu: React.FunctionComponent<NavMenuProps> = ({
    app,
    menuRoutes,
    menuProps,
    menuItemOnClick: onClick,
    dimensions = { width: 0 },
}) => {
    const history = useHistory();
    const location = useLocation(); // this is necessary to ensure that updated location result in a rerender of the component
    const { width = 0 } = dimensions;
    console.log(width);
    const isDropdown = width <= 768; // our breakpoint for dropdown will be antd layout 'md'

    const menuItemsRenderer = (
        func: (props: any) => any,
        rendererMenuRoutes: any,
        rendererMenuProps: any,
        selectedKeys: string[]
    ) => {
        return rendererMenuRoutes.map((route: any, index: number) =>
            func({
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

    const CollapsedMenu = (
        <Menu>
            {menuItemsRenderer(
                collapsedMenuItemRenderer,
                menuRoutes,
                menuProps,
                selectedKeys
            )}
        </Menu>
    );

    return isDropdown ? (
        <Dropdown
            overlay={CollapsedMenu}
            trigger={['click']}
            className="app-nav-menu-collapsed"
        >
            <MenuOutlined />
        </Dropdown>
    ) : (
        <Menu
            selectedKeys={selectedKeys}
            mode="horizontal"
            className="app-nav-menu-full"
        >
            {menuItemsRenderer(
                fullMenuItemRenderer,
                menuRoutes,
                menuProps,
                selectedKeys
            )}
        </Menu>
    );
};

export default NavMenu;
