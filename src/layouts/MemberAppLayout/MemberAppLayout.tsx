import React from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import memoize from 'memoize-one';
import _ from 'lodash';
import { MemberAppLayoutProps, MemberAppLayoutState } from './types';
import memberAppRoutes from '@routes/MemberApp/statics';
import './MemberAppLayout.scss';

const { Sider } = Layout;

class MemberAppLayout extends React.Component<
    MemberAppLayoutProps,
    MemberAppLayoutState
> {
    state = {
        collapsed: false,
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
            nextState.selectedKeys[0] = memberAppRoutes
                .findIndex(({ path }) => path === nextPath)
                .toString();
        }
        return nextState;
    }

    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    };

    onClick = ({ key }: { key: any }, path: string) => {
        const { history } = this.props;
        history.push(path);
    };

    getMenuItems = memoize(() =>
        memberAppRoutes.map((memberAppRoute, index) => (
            <Menu.Item
                key={index}
                icon={React.createElement(memberAppRoute.icon)}
                onClick={(item) => this.onClick(item, memberAppRoute.path)}
            >
                {memberAppRoute.name}
            </Menu.Item>
        ))
    );

    render() {
        const { children } = this.props;
        const { collapsed, selectedKeys } = this.state;
        return (
            <Layout className="member-app-layout-view">
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                    className="sider-layout"
                >
                    <div className="sider-layout-title" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['0']}
                        selectedKeys={selectedKeys}
                        mode="inline"
                    >
                        {this.getMenuItems()}
                    </Menu>
                </Sider>
                {children}
            </Layout>
        );
    }
}

export default withRouter(MemberAppLayout);
