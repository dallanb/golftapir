import React, { FunctionComponent } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import memoize from 'memoize-one';
import { get as _get } from 'lodash';
import {
    MemberAppLayoutProps,
    MemberAppLayoutState,
    MenuItemRendererProps,
} from './types';
import { UserTile } from '@components';
import './MemberAppLayout.scss';
import defaultMenuItemRenderer from './defaultMenuItemRenderer';
import { getRouteBase } from '@utils';

const { Sider } = Layout;

class MemberAppLayout extends React.Component<
    MemberAppLayoutProps,
    MemberAppLayoutState
> {
    private readonly menuItemRenderer: FunctionComponent<MenuItemRendererProps>;

    constructor(props: MemberAppLayoutProps) {
        super(props);
        this.menuItemRenderer =
            props.menuItemRenderer || defaultMenuItemRenderer;
    }

    state = {
        selectedKeys: [],
        currentPath: this.props.location.pathname,
    };

    static getDerivedStateFromProps(
        nextProps: React.ComponentProps<any>,
        prevState: React.ComponentState
    ) {
        const nextState = { ...prevState };
        const prevPath = _get(prevState, ['currentPath']);
        const nextPath = _get(nextProps, ['location', 'pathname']);
        const pagePath = getRouteBase(nextPath);

        if (prevPath !== nextPath || !prevState.selectedKeys.length) {
            nextState.currentPath = nextPath;
            nextState.selectedKeys[0] = nextProps.menuRoutes
                .findIndex(({ path }: any) => path === pagePath)
                .toString();
        }
        return nextState;
    }

    menuItemOnClick = ({ key }: { key: any }, path: string) => {
        const { history } = this.props;
        history.push(path);
    };

    getMenuItems = memoize((menuRoutes, menuProps = {}) =>
        menuRoutes.map((route: any, index: number) =>
            this.menuItemRenderer({
                index,
                onClick: this.menuItemOnClick,
                route,
                menuProps,
            })
        )
    );

    getUserTileMenuItems = () => {
        const { history } = this.props;
        return (
            <Menu.Item
                key="logout"
                onClick={() => history.push(`/auth/logout`)}
            >
                Logout
            </Menu.Item>
        );
    };

    render() {
        const { name, avatar, menuRoutes, menuProps, children } = this.props;
        const { selectedKeys } = this.state;
        return (
            <Layout className="member-app-layout-view">
                <Sider className="member-app-sider-layout">
                    <div className="member-app-sider-layout-title" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['0']}
                        selectedKeys={selectedKeys}
                        mode="inline"
                    >
                        {this.getMenuItems(menuRoutes, menuProps)}
                    </Menu>
                    <div className="member-app-sider-layout-footer">
                        <UserTile
                            name={name}
                            avatar={avatar}
                            menu={this.getUserTileMenuItems}
                        />
                    </div>
                </Sider>
                {children}
            </Layout>
        );
    }
}

export default withRouter(MemberAppLayout);
