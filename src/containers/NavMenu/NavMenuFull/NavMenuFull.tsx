import React from 'react';
import { Menu } from 'antd';
import defaultMenuItemRenderer from './defaultMenuItemRenderer';
import { NavMenuFullProps } from './types';
import './NavMenuFull.less';

const NavMenuFull: React.FunctionComponent<NavMenuFullProps> = ({
    menuRoutes,
    menuProps,
    menuItemOnClick,
    selectedKeys,
}) => {
    const menuItemsRenderer = (
        rendererMenuRoutes: any,
        rendererMenuProps: any,
        selectedKeys: string[]
    ) => {
        return rendererMenuRoutes.map((route: any, index: number) =>
            defaultMenuItemRenderer({
                index,
                onClick: menuItemOnClick,
                route,
                menuProps: rendererMenuProps,
                selectedKeys,
            })
        );
    };
    return (
        <Menu
            selectedKeys={selectedKeys}
            mode="horizontal"
            className="app-nav-menu-full"
        >
            {menuItemsRenderer(menuRoutes, menuProps, selectedKeys)}
        </Menu>
    );
};

export default NavMenuFull;
