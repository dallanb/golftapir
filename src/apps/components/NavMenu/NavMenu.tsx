import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { map as _map } from 'lodash';
import { NavMenuProps } from './types';
import { getMenuSelectedKey, navigate } from '@utils';
import NavMenuCollapsed from './NavMenuCollapsed';
import NavMenuFull from './NavMenuFull';
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
    const isDropdown = width <= 768; // our breakpoint for dropdown will be antd layout 'md'

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

    return isDropdown ? (
        <NavMenuCollapsed
            menuRoutes={menuRoutes}
            menuProps={menuProps}
            menuItemOnClick={menuItemOnClick}
            selectedKeys={selectedKeys}
        />
    ) : (
        <NavMenuFull
            menuRoutes={menuRoutes}
            menuProps={menuProps}
            menuItemOnClick={menuItemOnClick}
            selectedKeys={selectedKeys}
        />
    );
};

export default NavMenu;
