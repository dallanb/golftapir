import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { get as _get } from 'lodash';
import { message } from '@utils';
import { AppLayout } from '@layouts';
import { ComponentRoute, MemberAppViewProps } from './types';
import { AppLoading, ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import constantRoutes from '@constants/routes';
import { AuthActions } from '@actions';
import MemberAppActions from './actions';
import statics from '@apps/MemberApp/statics';
import { FirebaseClient } from '@libs';
import { withAppRoute } from '@utils';
import constants from '@constants';
import { selectData as selectAppData } from '@selectors/AppSelector';
import { selectData as selectBaseData } from '@selectors/BaseSelector';
import { AppLayoutNav } from '@layouts/AppLayout';
import { NavExtra } from '@apps/components';

const MemberAppView: React.FunctionComponent<MemberAppViewProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MemberAppActions.init());
        FirebaseClient.onMessageListener()
            .then((payload) => {
                const { title, body } = payload.data;
                message.success(body);
            })
            .catch((err) => {
                message.error(JSON.stringify(err));
            });
        return () => {
            dispatch(MemberAppActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectAppData);
    const { me, pending, isLoggedIn, forceLogout } = useSelector(
        selectBaseData
    );
    const name = _get(me, ['display_name'], '');
    const avatar = _get(me, ['avatar', 's3_filename'], '');
    const menuProps = { icons: { notifications: { pending } } };

    if (!isInitialized) return <AppLoading />;
    return (
        <AppLayout>
            <AppLayoutNav
                app={constants.APPS.MEMBER_APP}
                name={name}
                avatar={avatar}
                menuProps={menuProps}
                menuRoutes={statics}
                extra={<NavExtra />}
            />
            <Switch>
                {routes.map(({ path, component, exact }: ComponentRoute) => (
                    <Route
                        key={path}
                        path={`${constantRoutes.APPS.MEMBER_APP.ROUTE}${path}`}
                        component={component}
                        exact={exact}
                    />
                ))}
                {protectedRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
                        <ProtectedRoute
                            key={path}
                            path={`${constantRoutes.APPS.MEMBER_APP.ROUTE}${path}`}
                            component={component}
                            exact={exact}
                            isLoggedIn={isLoggedIn}
                            forceLogout={forceLogout}
                            refresh={() => dispatch(AuthActions.refresh())}
                        />
                    )
                )}
                <Route
                    render={() => (
                        <Redirect
                            to={withAppRoute(constantRoutes.ROUTES.HOME.ROUTE, {
                                app: constants.APPS.MEMBER_APP,
                            })}
                        />
                    )}
                />
            </Switch>
        </AppLayout>
    );
};

export default MemberAppView;
