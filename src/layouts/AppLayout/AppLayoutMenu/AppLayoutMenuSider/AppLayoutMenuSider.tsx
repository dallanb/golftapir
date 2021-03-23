import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import { AppLayoutMenuSiderProps } from './types';
import menuItemRenderer from './defaultMenuItemRenderer';
import './AppLayoutMenuSider.less';
import classnames from 'classnames';

const { Sider } = Layout;

const AppLayoutMenuSider: React.FunctionComponent<AppLayoutMenuSiderProps> = ({
    selectedKeys,
    menuRoutes,
    menuProps,
    menuItemOnClick,
    className,
}) => {
    const history = useHistory();

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

    const cx = classnames('member-app-sider-layout', className);

    return (
        <Sider
            className={cx}
            breakpoint={'xl'}
            collapsedWidth={0}
            trigger={null}
        >
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
    );
};

export default AppLayoutMenuSider;
