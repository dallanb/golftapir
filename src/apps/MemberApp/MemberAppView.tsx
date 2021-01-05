import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { get as _get, map as _map } from 'lodash';
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
import { getMenuSelectedKey, withAppRoute } from '@utils';
import constants from '@constants';

const initialSelectedKey = getMenuSelectedKey(
    location.pathname,
    constants.APPS.MEMBER_APP,
    _map(statics, 'key')
);

const MemberAppView: React.FunctionComponent<MemberAppViewProps> = () => {
    const dispatch = useDispatch();
    const [selectedKeys, setSelectedKeys] = useState(initialSelectedKey);
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
            app={constants.APPS.LEAGUE_APP}
            name={name}
            avatar={avatar}
            menuProps={menuProps}
            menuRoutes={statics}
            menuItemOnClick={({ key }: { key: any }, path: string) => {
                setSelectedKeys(key);
            }}
            selectedKeys={selectedKeys}
        >
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
        </MemberAppLayout>
    );
};

export default MemberAppView;
