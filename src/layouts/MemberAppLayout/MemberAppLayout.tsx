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
import defaultMenuItemRenderer from './defaultMenuItemRenderer';
import { withAppRoute, withDynamicRoute } from '@utils';
import routes from '@constants/routes';
import './MemberAppLayout.less';
import constants from '@constants';

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
        // if (prevPath !== nextPath || !prevState.selectedKeys.length) {
        //     nextState.currentPath = nextPath;
        //     nextState.selectedKeys[0] = nextProps.menuRoutes
        //         .findIndex(({ key }: any) => baseKey === key)
        //         .toString();
        // }
        return nextState;
    }

    menuItemOnClick = ({ key }: { key: any }, path: string) => {
        console.log(key); // TODO: update state here
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

    render() {
        const {
            name,
            avatar,
            menuRoutes,
            menuProps,
            history,
            children,
        } = this.props;
        const { selectedKeys } = this.state;
        return (
            <Layout className="member-app-layout-view">
                <Sider className="member-app-sider-layout">
                    <div
                        className="member-app-sider-layout-title"
                        onClick={() =>
                            history.push(
                                withAppRoute(routes.ROUTES.HOME.ROUTE, {
                                    app: constants.APPS.MEMBER_APP,
                                })
                            )
                        }
                    />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['0']}
                        selectedKeys={selectedKeys}
                        className="member-app-sider-layout-menu"
                        mode="inline"
                    >
                        {this.getMenuItems(menuRoutes, menuProps)}
                    </Menu>
                </Sider>
                {children}
            </Layout>
        );
    }
}

export default withRouter(MemberAppLayout);
