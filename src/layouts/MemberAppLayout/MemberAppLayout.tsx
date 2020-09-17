import React from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import memoize from 'memoize-one';
import _ from 'lodash';
import { MemberAppLayoutProps, MemberAppLayoutState } from './types';
import memberAppRoutes from '@routes/MemberApp/statics';
import { AccountTile } from '@components';
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
            nextState.selectedKeys[0] = memberAppRoutes
                .findIndex(({ path }) => path === nextPath)
                .toString();
        }
        return nextState;
    }

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
        const { name, avatar, children } = this.props;
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
                        {this.getMenuItems()}
                    </Menu>
                    <div className="sider-layout-footer">
                        <AccountTile name={name} avatar={avatar} />
                    </div>
                </Sider>
                {children}
            </Layout>
        );
    }
}

export default withRouter(MemberAppLayout);
