import React from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import memoize from 'memoize-one';
import _ from 'lodash';
import { MemberAppLayoutProps, MemberAppLayoutState } from './types';
import { UserTile } from '@components';
import './MemberAppLayout.scss';

const { Sider } = Layout;

class MemberAppLayout extends React.Component<
    MemberAppLayoutProps,
    MemberAppLayoutState
> {
    state = {
        selectedKeys: [],
        currentPath: this.props.location.pathname,
    };

    static getDerivedStateFromProps(
        nextProps: React.ComponentProps<any>,
        prevState: React.ComponentState
    ) {
        const nextState = { ...prevState };
        const prevPath = _.get(prevState, ['currentPath']);
        const nextPath = _.get(nextProps, ['location', 'pathname']);

        if (prevPath !== nextPath || !prevState.selectedKeys.length) {
            nextState.currentPath = nextPath;
            nextState.selectedKeys[0] = nextProps.menuRoutes
                .findIndex(({ path }: any) => path === nextPath)
                .toString();
        }
        return nextState;
    }

    menuItemOnClick = ({ key }: { key: any }, path: string) => {
        const { history } = this.props;
        history.push(path);
    };

    getMenuItems = memoize((menuRoutes) =>
        menuRoutes.map((memberAppRoute: any, index: number) => (
            <Menu.Item
                key={index}
                icon={React.createElement(memberAppRoute.icon)}
                onClick={(item) =>
                    this.menuItemOnClick(item, memberAppRoute.path)
                }
            >
                {memberAppRoute.name}
            </Menu.Item>
        ))
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
        const { name, avatar, menuRoutes, children } = this.props;
        const { selectedKeys } = this.state;
        return (
            <Layout className="member-app-layout-view">
                <Sider className="sider-layout">
                    <div className="sider-layout-title" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['0']}
                        selectedKeys={selectedKeys}
                        mode="inline"
                    >
                        {this.getMenuItems(menuRoutes)}
                    </Menu>
                    <div className="sider-layout-footer">
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
