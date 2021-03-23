import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { map as _map } from 'lodash';
import { useHistory, useLocation } from 'react-router-dom';
import { AppLayoutProps } from './types';
import { getMenuSelectedKey } from '@utils';
import { navigate } from '@utils';
import AppLayoutMenuSider from './AppLayoutMenuSider';
import AppLayoutMenuNav from './AppLayoutMenuNav';
import './AppLayout.less';

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({
    app,
    name,
    avatar,
    menuRoutes,
    menuProps,
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

    const menuItemOnClick = ({ key }: { key: any }, path: string) => {
        onClick && onClick({ key }, path);
        setSelectedKeys(key);
        setClickedPath(true);
        navigate(history, path);
    };

    return (
        <Layout className="member-app-layout-view glassmorphic">
            <AppLayoutMenuNav
                selectedKeys={selectedKeys}
                menuRoutes={menuRoutes}
                menuProps={menuProps}
                menuItemOnClick={menuItemOnClick}
            />
            <AppLayoutMenuSider
                selectedKeys={selectedKeys}
                menuRoutes={menuRoutes}
                menuProps={menuProps}
                menuItemOnClick={menuItemOnClick}
            />
            {children}
        </Layout>
    );
};

export default AppLayout;
