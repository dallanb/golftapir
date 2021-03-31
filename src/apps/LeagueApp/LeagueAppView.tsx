import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
} from 'react-router-dom';
import { get as _get } from 'lodash';
import { message, statusToRole } from '@utils';
import { AppLayout } from '@layouts';
import { ComponentRoute, LeagueAppViewProps } from './types';
import { AppLoading, ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import constants from '@constants';
import constantRoutes from '@constants/routes';
import { AuthActions, SocketActions } from '@actions';
import LeagueAppActions from './actions';
import statics from '@apps/LeagueApp/statics';
import { FirebaseClient } from '@libs';
import { withAppRoute, withS3URL, navigate } from '@utils';
import {
    selectData as selectAppData,
    selectLeagueIsFetching,
    selectLeagueMemberIsFetching,
} from '@selectors/AppSelector';
import { selectData as selectBaseData } from '@selectors/BaseSelector';
import { AppLayoutNav } from '@layouts/AppLayout';
import { NavExtra, NavMenu } from '@apps/components';
import { ResizeContext, WebSocketContext } from '@contexts';
import { socketEventHandlers as notificationEventHandler } from '@apps/MemberApp/utils';
import { socketEventHandlers as leagueTopicEventHandler } from './utils';

const LeagueAppView: React.FunctionComponent<LeagueAppViewProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const dimensions = useContext(ResizeContext);
    const { notificationWs, leagueTopicWs } = useContext(WebSocketContext);

    const state = _get(location, ['state'], null);
    const paramLeagueUUID = _get(params, ['league_uuid'], null);

    const {
        isInitialized,
        isRefreshing,
        isFetching: _isFetching,
        league,
        leagueMember,
        uuid: leagueUUID,
    } = useSelector(selectAppData);
    const { me, isLoggedIn, forceLogout } = useSelector(selectBaseData);
    const name = _get(me, ['display_name'], '');
    const avatar = _get(me, ['avatar', 's3_filename'], '');
    const leagueName = _get(league, ['data', 'name'], '');
    const leagueAvatar = withS3URL(
        _get(league, ['data', 'avatar', 's3_filename'], null),
        constants.S3_FOLDERS.LEAGUE.AVATAR
    );
    const memberStatus = _get(
        leagueMember,
        ['data', 'status'],
        constants.STATUS.INACTIVE.KEY
    );
    const memberRole = statusToRole(memberStatus);
    const leagueIsFetching = useSelector(selectLeagueIsFetching);
    const leagueMemberIsFetching = useSelector(selectLeagueMemberIsFetching);
    const isFetching =
        _isFetching || leagueIsFetching || leagueMemberIsFetching;
    const isReady = isInitialized && !isRefreshing;

    useEffect(() => {
        if (!paramLeagueUUID) {
            navigate(
                history,
                withAppRoute(constantRoutes.ROUTES.HOME.ROUTE, {
                    app: constants.APPS.MEMBER_APP,
                    routeProps: {},
                })
            );
        } else {
            dispatch(LeagueAppActions.preInit(state));
            dispatch(LeagueAppActions.init(paramLeagueUUID));
            FirebaseClient.onMessageListener()
                .then((payload) => {
                    const { title, body } = payload.data;
                    message.success(`${body}`);
                })
                .catch((err) => {
                    message.error(JSON.stringify(err));
                });
        }
        return () => {
            dispatch(LeagueAppActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (
            isReady &&
            !isFetching &&
            leagueUUID &&
            leagueUUID !== paramLeagueUUID
        ) {
            dispatch(LeagueAppActions.refresh(paramLeagueUUID));
        }
    }, [isReady, isFetching, paramLeagueUUID]);

    useEffect(() => {
        if (isInitialized && isLoggedIn) {
            dispatch(
                SocketActions.init(notificationWs, undefined, {
                    eventHandler: notificationEventHandler,
                })
            );
            dispatch(
                SocketActions.init(
                    leagueTopicWs,
                    { uuid: paramLeagueUUID },
                    {
                        eventHandler: leagueTopicEventHandler,
                    }
                )
            );
        }
    }, [isInitialized, isLoggedIn, paramLeagueUUID]);

    useEffect(() => {
        if (
            !leagueMemberIsFetching &&
            memberStatus === constants.STATUS.INACTIVE.KEY
        ) {
            navigate(history, constantRoutes.ROUTES.HOME.ROUTE);
        }
    }, [leagueMemberIsFetching, memberStatus]);

    const menuProps = {
        paths: {
            [constantRoutes.ROUTES.LEAGUE_HOME.KEY]: {
                league_uuid: leagueUUID,
            },
            [constantRoutes.ROUTES.MEMBER_SETTINGS.KEY]: {
                league_uuid: leagueUUID,
            },
            [constantRoutes.ROUTES.MEMBERS.KEY]: { league_uuid: leagueUUID },
            [constantRoutes.ROUTES.CONTESTS.KEY]: { league_uuid: leagueUUID },
        },
        names: { [constantRoutes.ROUTES.LEAGUE_HOME.KEY]: leagueName },
        icons: {
            [constantRoutes.ROUTES.LEAGUE_HOME.KEY]: {
                src: leagueAvatar,
                name: leagueName,
                shape: 'square',
                style: { borderRadius: '4px' },
                size: 24,
            },
        },
        role: memberRole,
    };
    if (!isReady || isFetching) return <AppLoading />;
    return (
        <AppLayout>
            <AppLayoutNav
                app={constants.APPS.LEAGUE_APP}
                name={name}
                avatar={avatar}
                menu={
                    <NavMenu
                        app={constants.APPS.LEAGUE_APP}
                        menuProps={menuProps}
                        menuRoutes={statics}
                        dimensions={dimensions}
                    />
                }
                extra={<NavExtra />}
            />
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
                    ({ path, component, role = -1, exact }: ComponentRoute) => {
                        return (
                            <ProtectedRoute
                                key={path}
                                path={`${constantRoutes.APPS.LEAGUE_APP.ROUTE}${path}`}
                                component={component}
                                exact={exact}
                                roleAccess={memberRole >= role}
                                isLoggedIn={isLoggedIn}
                                forceLogout={forceLogout}
                                refresh={() => dispatch(AuthActions.refresh())}
                            />
                        );
                    }
                )}
                <Route
                    render={() => (
                        <Redirect
                            to={withAppRoute(
                                constantRoutes.ROUTES.LEAGUE_HOME.ROUTE,
                                {
                                    app: constants.APPS.LEAGUE_APP,
                                    routeProps: { league_uuid: leagueUUID },
                                }
                            )}
                        />
                    )}
                />
            </Switch>
        </AppLayout>
    );
};

export default LeagueAppView;
