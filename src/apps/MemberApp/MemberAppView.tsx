import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { get as _get } from 'lodash';
import { message, Spin } from 'antd';
import { MemberAppLayout } from '@layouts';
import { ComponentRoute, MemberAppViewProps } from './types';
import { ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import constantRoutes from '@constants/routes';
import { AuthActions } from '@actions';
import MemberAppActions from './actions';
import statics from '@apps/MemberApp/statics';
import { FirebaseClient } from '@libs';
import { selectIsInitialized } from './selector';
import { selectData as selectBaseData } from '@selectors/BaseSelector';
import { withAppRoute } from '@utils';
import constants from '@constants';

const MemberAppView: React.FunctionComponent<MemberAppViewProps> = () => {
    const dispatch = useDispatch();
    const isInitialized = useSelector(selectIsInitialized);
    const { me, pending, isLoggedIn, forceLogout } = useSelector(
        selectBaseData
    );
    const name = _get(me, ['display_name'], '');
    const avatar = _get(me, ['avatar', 's3_filename'], '');
    const menuProps = { icons: { notifications: { pending } } };

    useEffect(() => {
        dispatch(MemberAppActions.init());
        FirebaseClient.onMessageListener()
            .then((payload) => {
                const { title, body } = payload.data;
                message.success(`${title}; ${body}`);
            })
            .catch((err) => {
                message.error(JSON.stringify(err));
            });
        return () => {
            dispatch(MemberAppActions.terminate());
        };
    }, []);
    if (!isInitialized) return <Spin />;
    return (
        <MemberAppLayout
            name={name}
            avatar={avatar}
            menuProps={menuProps}
            menuRoutes={statics}
        >
            <Switch>
                {routes.map(({ path, component, exact }: ComponentRoute) => (
                    <Route
                        key={path}
                        path={path}
                        component={component}
                        exact={exact}
                    />
                ))}
                {protectedRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
                        <ProtectedRoute
                            key={path}
                            path={path}
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
                            to={withAppRoute(constantRoutes.HOME.ROUTE, {
                                app: constants.APPS.MEMBER_APP,
                            })}
                        />
                    )}
                />
            </Switch>
        </MemberAppLayout>
    );
};

export default MemberAppView;
