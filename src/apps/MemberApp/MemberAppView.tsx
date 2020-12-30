import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { get as _get } from 'lodash';
import { message, Spin } from 'antd';
import { MemberAppLayout } from '@layouts';
import { ComponentRoute, MemberAppViewProps } from './types';
import { ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import constantRoutes from '@constants/routes';
import { AuthActions } from '@actions';
import BaseActions from './actions';
import statics from '@apps/MemberApp/statics';
import { FirebaseClient } from '@libs';

class MemberAppView extends React.Component<MemberAppViewProps> {
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
        if (!isInitialized) return <Spin />;
        return (
            <MemberAppLayout
                name={name}
                avatar={avatar}
                menuProps={menuProps}
                menuRoutes={statics}
            >
                <Switch>
                    {routes.map(
                        ({ path, component, exact }: ComponentRoute) => (
                            <Route
                                key={path}
                                path={path}
                                component={component}
                                exact={exact}
                            />
                        )
                    )}
                    {protectedRoutes.map(
                        ({ path, component, exact }: ComponentRoute) => (
                            <ProtectedRoute
                                key={path}
                                path={path}
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
                                to={constantRoutes.MEMBER_APP.HOME.ROUTE}
                            />
                        )}
                    />
                </Switch>
            </MemberAppLayout>
        );
    }
}

const mapStateToProps = ({ base, auth, notification }: any) => {
    const { me, isInitialized } = base;
    const { isLoggedIn, forceLogout } = auth;
    const { pending } = notification;

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
            dispatch(BaseActions.init());
        },
        terminate() {
            dispatch(BaseActions.terminate());
        },
        refresh() {
            dispatch(AuthActions.refresh());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberAppView);
