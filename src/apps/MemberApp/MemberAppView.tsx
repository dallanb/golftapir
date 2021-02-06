import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { get as _get, map as _map } from 'lodash';
import { message, Spin } from 'antd';
import { AppLayout } from '@layouts';
import {
    ComponentRoute,
    MemberAppViewProps,
    MemberAppViewState,
} from './types';
import { AppLoading, ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import constantRoutes from '@constants/routes';
import { AuthActions } from '@actions';
import MemberAppActions from './actions';
import statics from '@apps/MemberApp/statics';
import { FirebaseClient } from '@libs';
import { getMenuSelectedKey, withAppRoute } from '@utils';
import constants from '@constants';

class MemberAppView extends React.PureComponent<
    MemberAppViewProps,
    MemberAppViewState
> {
    constructor(props: MemberAppViewProps) {
        super(props);
        this.state = {
            selectedKeys: getMenuSelectedKey(
                location.pathname,
                constants.APPS.MEMBER_APP,
                _map(statics, 'key')
            ),
        };
    }

    componentDidMount() {
        const { init } = this.props;
        init();
        FirebaseClient.onMessageListener()
            .then((payload) => {
                const { title, body } = payload.data;
                message.success(`${title}; ${body}`);
            })
            .catch((err) => {
                message.error(JSON.stringify(err));
            });
    }

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    render() {
        const {
            isInitialized,
            isLoggedIn,
            forceLogout,
            refresh,
            name,
            avatar,
            menuProps,
        } = this.props;
        const { selectedKeys } = this.state;
        if (!isInitialized) return <AppLoading />;
        return (
            <AppLayout
                app={constants.APPS.LEAGUE_APP}
                name={name}
                avatar={avatar}
                menuProps={menuProps}
                menuRoutes={statics}
                menuItemOnClick={({ key }: { key: any }, path: string) => {
                    this.setState({ selectedKeys: key });
                }}
                selectedKeys={selectedKeys}
            >
                <Switch>
                    {routes.map(
                        ({ path, component, exact }: ComponentRoute) => (
                            <Route
                                key={path}
                                path={`${constantRoutes.APPS.MEMBER_APP.ROUTE}${path}`}
                                component={component}
                                exact={exact}
                            />
                        )
                    )}
                    {protectedRoutes.map(
                        ({ path, component, exact }: ComponentRoute) => (
                            <ProtectedRoute
                                key={path}
                                path={`${constantRoutes.APPS.MEMBER_APP.ROUTE}${path}`}
                                component={component}
                                exact={exact}
                                isLoggedIn={isLoggedIn}
                                forceLogout={forceLogout}
                                refresh={() => refresh()}
                            />
                        )
                    )}
                    <Route
                        render={() => (
                            <Redirect
                                to={withAppRoute(
                                    constantRoutes.ROUTES.HOME.ROUTE,
                                    {
                                        app: constants.APPS.MEMBER_APP,
                                    }
                                )}
                            />
                        )}
                    />
                </Switch>
            </AppLayout>
        );
    }
}

const mapStateToProps = ({ app, base }: any) => {
    const { isInitialized } = app;
    const { me, pending, isLoggedIn, forceLogout } = base;

    const name = _get(me, ['display_name'], '');
    const menuProps = { icons: { notifications: { pending } } };

    return {
        name,
        avatar: _get(me, ['avatar', 's3_filename'], ''),
        isInitialized,
        isLoggedIn,
        forceLogout,
        menuProps,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            dispatch(MemberAppActions.init());
        },
        terminate() {
            dispatch(MemberAppActions.terminate());
        },
        refresh() {
            dispatch(AuthActions.refresh());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberAppView);
