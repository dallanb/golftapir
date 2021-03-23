import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { map as _map } from 'lodash';
import AppLayoutMenuNav from './AppLayoutMenuNav';
import AppLayoutMenuSider from './AppLayoutMenuSider';
import { AppLayoutMenuProps } from './types';
import { getMenuSelectedKey, navigate } from '@utils';
import './AppLayoutMenu.less';

const AppLayoutMenu: React.FunctionComponent<AppLayoutMenuProps> = ({
    app,
    menuRoutes,
    menuProps,
    menuItemOnClick: onClick,
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

    const menuItemOnClick = ({ key }: { key: any }, path: string) => {
        onClick && onClick({ key }, path);
        setSelectedKeys(key);
        setClickedPath(true);
        navigate(history, path);
    };
    return (
        <AppLayoutMenuNav
            selectedKeys={selectedKeys}
            menuRoutes={menuRoutes}
            menuProps={menuProps}
            menuItemOnClick={menuItemOnClick}
            className="app-layout-menu-nav"
        />
    );
};

export default AppLayoutMenu;
