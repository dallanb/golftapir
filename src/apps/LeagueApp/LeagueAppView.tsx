import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useParams,
} from 'react-router-dom';
import { get as _get, map as _map } from 'lodash';
import { message, Spin } from 'antd';
import { MemberAppLayout } from '@layouts';
import { ComponentRoute, LeagueAppViewProps } from './types';
import { ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import constants from '@constants';
import constantRoutes from '@constants/routes';
import { AuthActions } from '@actions';
import BaseActions from './actions';
import statics from '@apps/LeagueApp/statics';
import { FirebaseClient } from '@libs';
import { getMenuSelectedKey, withAppRoute, withS3URL } from '@utils';
import { selectData as selectBaseData } from '@selectors/BaseSelector';
import { selectData } from './selector';

const initialSelectedKey = getMenuSelectedKey(
    location.pathname,
    constants.APPS.LEAGUE_APP,
    _map(statics, 'key')
);

const LeagueAppView: React.FunctionComponent<LeagueAppViewProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const [selectedKeys, setSelectedKeys] = useState(initialSelectedKey);
    const prevLeague = _get(history, ['location', 'state'], null);
    const prevUUID = _get(params, ['league_uuid'], null);
    const { isInitialized, isRefreshing, league } = useSelector(selectData);
    const { me, isLoggedIn, forceLogout } = useSelector(selectBaseData);
    const leagueUUID = _get(league, ['uuid'], '');
    const isReady = isInitialized && !isRefreshing;

    useEffect(() => {
        if (isReady && leagueUUID !== prevUUID) {
            dispatch(BaseActions.refresh(prevUUID));
        }
    });

    useEffect(() => {
        if (!prevUUID) {
            history.push(
                withAppRoute(constantRoutes.ROUTES.HOME.ROUTE, {
                    app: constants.APPS.MEMBER_APP,
                    routeProps: {},
                })
            );
        } else {
            dispatch(BaseActions.preInit(prevLeague));
            dispatch(BaseActions.init(prevUUID));
            FirebaseClient.onMessageListener()
                .then((payload) => {
                    const { title, body } = payload.data;
                    message.success(`${title}; ${body}`);
                })
                .catch((err) => {
                    message.error(JSON.stringify(err));
                });
        }
        return () => {
            dispatch(BaseActions.terminate());
        };
    }, []);

    const name = _get(me, ['display_name'], '');
    const avatar = _get(me, ['avatar', 's3_filename'], '');
    const leagueName = _get(league, ['name'], '');
    const leagueAvatar = withS3URL(
        _get(league, ['avatar', 's3_filename'], null),
        constants.S3_FOLDERS.LEAGUE.AVATAR
    );
    const menuProps = {
        paths: {
            home: { league_uuid: leagueUUID },
            league_members: { league_uuid: leagueUUID },
            contests: { league_uuid: leagueUUID },
        },
        names: { league: leagueName },
        icons: {
            league: {
                src: leagueAvatar,
                name: leagueName,
                shape: 'square',
                style: { borderRadius: '4px' },
                size: 24,
            },
        },
    };

    if (!isReady) return <Spin />;
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
                        path={`${constantRoutes.APPS.LEAGUE_APP.ROUTE}${path}`}
                        component={component}
                        exact={exact}
                    />
                ))}
                {protectedRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
                        <ProtectedRoute
                            key={path}
                            path={`${constantRoutes.APPS.LEAGUE_APP.ROUTE}${path}`}
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
                                app: constants.APPS.LEAGUE_APP,
                                routeProps: { league_uuid: leagueUUID },
                            })}
                        />
                    )}
                />
            </Switch>
        </MemberAppLayout>
    );
};

export default LeagueAppView;
